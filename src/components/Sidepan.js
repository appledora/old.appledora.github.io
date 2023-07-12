import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/Sidepan.scss";
import { Link } from "react-router-dom";

const Sidepane = () => {
  const location = useLocation();
  return (
    <div className="sidepaneContainer">
      <div>
        <Link
          to="/"
          className={location.pathname === "/" ? "selected" : "normal"}
        >
          Appledora
        </Link>
        <Link
          to="/publication"
          className={
            location.pathname === "/publication" ? "selected" : "normal"
          }
        >
          Publications
        </Link>
        <Link
          to="/prizes"
          className={location.pathname === "/prizes" ? "selected" : "normal"}
        >
          Prizes
        </Link>
        {/* <Link
          to="/experience"
          className={
            location.pathname === "/experience" ? "selected" : "normal"
          }
        >
          Experience
        </Link> */}
        <Link
          to="/projects"
          className={location.pathname === "/projects" ? "selected" : "normal"}
        >
          Projects
        </Link>
      </div>
    </div>
  );
};

export default Sidepane;
