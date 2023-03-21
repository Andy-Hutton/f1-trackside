import { useState } from "react";
import "./App.css";
import axios from "axios";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./Components/Header/Header";
// import Footer from "./Components/Footer/Footer";

function getTop10() {
  const [Top10, setTop10] = useState({});

  async function getTop10() {
    const API = `http://localhost:8080/Top10`;
    const res = await axios.get(API);
    setTop10(res.data);
    console.log(res.data);
  }

  return (
    <div className="Top10">
      <>
        <p>
          View the current
          <button onClick={getTop10}>top 10</button>
        </p>
        <h2>
          {/* need to work out file path to link F1 Top 10 {F1.MRData?.StandingsTable?.StandingsLists?.DriverStandings?.} */}
        </h2>
      </>
    </div>
  );
}

export default getTop10;
