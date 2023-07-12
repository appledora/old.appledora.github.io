import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Intro from "./Intro";
import Publication from "./Publication";
import Project from "./Project";
import Prizes from "./Prize";
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Intro />} />
      <Route path="/publication" element={<Publication />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/prizes" element={<Prizes />} />
    </Routes>
  );
};

export default AnimatedRoutes;
