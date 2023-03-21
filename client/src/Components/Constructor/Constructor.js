import { useState } from "react";
import "./App.css";
import axios from "axios";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./Components/Header/Header";
// import Footer from "./Components/Footer/Footer";

function App() {
  const [F1, setF1] = useState({});

  async function getF1() {
    const API = `http://localhost:8080/Constructor`;
    const res = await axios.get(API);
    setF1(res.data);
    console.log(res.data);
  }

  return (
    <div className="Constructor">
      <p>
        You will find the constructors table clicking,
        <button onClick={getF1}>Here</button>
      </p>
      {/* find correct file path for constructors!!
     <h2>F1 {F1.MRData?.RaceTable?.Races[0]?.season}</h2> */}
    </div>
  );
}

export default App;
