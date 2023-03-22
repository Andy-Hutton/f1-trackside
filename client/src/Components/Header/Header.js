import "./Header.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// import { Link } from "react-router-dom";

// import Burger from "../Burger/Burger";

export default function Header() {
  return (
    <header className="header">
      <div className="navLink">
        <ul>
          <li>
            <Link to="Main">Home</Link>
          </li>
          <li>
            <Link to="F1">Next Round</Link>
          </li>
          <li>
            <Link to="Home">Have your say</Link>
          </li>
        </ul>
      </div>
      <h1 className="logo">F1 Trackside</h1>
      <span className="logo-strapline">
        The ultimate companion app for your pocket!
      </span>
      {/* <span className="logo-strapline-desktop">
        The ultimate companion app for your pocket!
      </span> */}

      {/* <Burger />
        <nav className="header-nav">
          <Link to="/Main" className="header-nav-link">
            <li className="header-nav-list-item">Home</li>
          </Link>
          <Link to="/F1" className="header-nav-link">
            <li className="header-nav-list-item">About</li>
          </Link>
        </nav> */}
    </header>
  );
}
