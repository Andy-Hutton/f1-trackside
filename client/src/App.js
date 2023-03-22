import { useState } from "react";
import "./App.css";
import axios from "axios";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";
import F1 from "./Components/F1/F1";
import Constructor from "./Components/Constructor/Constructor";
import Top10 from "./Components/Top10/Top10";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className="App">
        <div className="live">
          <h1>Live F1 Info....</h1>
        </div>
        <div className="link">
          <div className="home">
            <Link to="Main">Home</Link>
          </div>
        </div>
        <div className="link">
          <div className="next">
            <Link to="F1">
              Next
              <br /> Round
            </Link>
          </div>
        </div>
        <div className="link">
          <div className="constructor">
            <Link to="Constructor">
              Constructor
              <br /> Standings
            </Link>
          </div>
        </div>
        <div className="link">
          <div className="driver">
            <Link to="Top10">
              Driver
              <br /> Standings
            </Link>
          </div>
        </div>
        <div className="link">
          <div className="forum">
            <Link to="Home">
              Have your
              <br /> say
            </Link>
          </div>
        </div>
        <div className="link">
          <div className="about">
            <Link to="About">About me</Link>
          </div>
        </div>

        <Routes>
          <Route path="/Main" element={<Main />} />
          <Route path="/F1" element={<F1 />} />
          <Route path="/Constructor" element={<Constructor />} />
          <Route path="/Top10" element={<Top10 />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
      <Footer className="footer--pin" />
    </BrowserRouter>
  );
}

export default App;
