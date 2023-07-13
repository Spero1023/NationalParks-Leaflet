import NearMeSharpIcon from "@mui/icons-material/NearMeSharp";
import ForestTwoToneIcon from "@mui/icons-material/ForestTwoTone";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";

import React, { useRef, useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server";

import { key } from "../../../key";
import axios from "axios";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";

function LocateButton({ onLocationFound }) {
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      onLocationFound(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return (
    <div className="leaflet-top leaflet-right">
      <NearMeSharpIcon
        style={{ backgroundColor: "white" }}
        className="leaflet-bar leaflet-control"
        onClick={() => {
          map.locate();
        }}
      >
        Locate Me
      </NearMeSharpIcon>
    </div>
  );
}

function Map() {
  const mapRef = useRef(null);
  const [userLocation, setUserLocation] = useState(null);
  const [parks, setParks] = useState([]);

  useEffect(() => {
    const fetchParks = async () => {
      try {
        let start = 0;
        let limit = 55;
        let allParkData = [];

        while (true) {
          const response = await axios.get(
            `https://developer.nps.gov/api/v1/parks?api_key=${key}&start=${start}&limit=${limit}`
          );

          const parkData = response.data.data
            .filter((park) => park.designation === "National Park")
            .map((park) => ({
              name: park.name,
              location: [park.latitude, park.longitude],
              image: park.images.length > 0 ? park.images[0].url : null,
              description: park.description,
              url: park.url,
              designation: park.designation,
            }));

          allParkData = [...allParkData, ...parkData];

          if (response.data.total <= start + limit) {
            break;
          }

          start += limit;
        }

        setParks(allParkData);
      } catch (error) {
        console.error("Error fetching park data:", error);
      }
    };

    fetchParks();
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (map) {
      map.locate();
    }
  }, []);

  const parkIcon = L.divIcon({
    html: ReactDOMServer.renderToString(
      <ForestTwoToneIcon style={{ color: "green" }} />
    ),
    className: "dummy",
  });

  const houseIcon = L.divIcon({
    html: ReactDOMServer.renderToString(<PersonPinCircleIcon />),
    className: "dummy",
  });

  return (
    <MapContainer
      id="map"
      center={[41.5, -100.0]}
      zoom={3}
      whenCreated={(map) => {
        mapRef.current = map;
      }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <LocateButton onLocationFound={setUserLocation} />

      {userLocation && (
        <Marker position={userLocation} icon={houseIcon}>
          <Popup>You are here</Popup>
        </Marker>
      )}

      {parks.map((park, index) => (
        <Marker key={index} position={park.location} icon={parkIcon}>
          <Popup maxWidth="auto">
            <div>
              <h2>{park.name}</h2>
              <h3>{park.designation}</h3>
              <h4>{park.description}</h4>
              <a href={park.url}>{park.url}</a>
              {park.image && <img src={park.image} alt={park.name} />}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;
