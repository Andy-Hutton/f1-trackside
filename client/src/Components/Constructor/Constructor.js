import { useState } from "react";
// import "./src/App.css";
import axios from "axios";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function Constructor() {
  const [Constructor, setConstructor] = useState({});

  async function getConstructor() {
    const API = `http://localhost:8080/Constructor`;
    const res = await axios.get(API);
    setConstructor(res.data);
    console.log(res.data);
  }

  return (
    <div className="App">
      <>
        <p>
          You will find the constructors table clicking
          <button onClick={getConstructor}>Here</button>
        </p>

        <p>
          Constructor Standings
          {Constructor.MRData?.StandingsTable?.StandingsLists[0]?.ConstructorStandings.map(
            (standing) => {
              return (
                <p>
                  {standing.position}- {standing.Constructor.name} With-
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

export default Constructor;
