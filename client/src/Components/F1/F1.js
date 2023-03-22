import { useState } from "react";
// import "./src/App.css";
import axios from "axios";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function F1() {
  const [F1, setF1] = useState({});

  async function getF1() {
    const API = `http://localhost:8080/F1`;
    const res = await axios.get(API);
    setF1(res.data);
    console.log(res.data);
  }

  return (
    <div className="App">
      <>
        <p>
          You will find the next race info by clicking,
          <button onClick={getF1}>Here</button>
        </p>
        <h2>
          F1 {F1.MRData?.RaceTable?.Races[0]?.season} Round{" "}
          {F1.MRData?.RaceTable?.Races[0]?.round}
        </h2>
      </>
      {F1 !== {} && (
        <>
          <h2>{F1.MRData?.RaceTable?.Races[0]?.Circuit.circuitName}</h2>
          <p>
            Qualifying is on {F1.MRData?.RaceTable?.Races[0]?.Qualifying.date}
          </p>
          <p>Starts at {F1.MRData?.RaceTable?.Races[0]?.Qualifying.time} GMT</p>
          <p>Race day is on {F1.MRData?.RaceTable?.Races[0]?.date}</p>
          <p>Starts at {F1.MRData?.RaceTable?.Races[0]?.time} GMT</p>
        </>
      )}

      <p>Import Footer Here!</p>
    </div>
  );
}

export default F1;
