import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./home";

const Main = () => {
  return (
    <BrowserRouter>
      <div>
        <nav></nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Main;
