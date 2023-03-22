import { useState } from "react";
// import "./App.css";
import axios from "axios";

// import { BrowserRouter, Routes, Route } from "react-router-dom";

function Top10() {
  const [Top10, setTop10] = useState({});

  async function getTop10() {
    const API = `http://localhost:8080/Top10`;
    const res = await axios.get(API);
    setTop10(res.data);
    console.log(res.data);
  }

  return (
    <div className="App">
      <>
        <p>
          View the current Driver standings clicking
          <button onClick={getTop10}>here</button>
        </p>
        <p>
          Driver Standings
          {Top10.MRData?.StandingsTable?.StandingsLists[0]?.DriverStandings.map(
            (standing) => {
              return (
                <p>
                  {standing.position}- {standing.Driver.givenName} -
                  {standing.Driver.familyName} With-
                  {standing.points} Points
                </p>
              );
            }
          )}
        </p>
      </>
    </div>
  );
}

export default Top10;
