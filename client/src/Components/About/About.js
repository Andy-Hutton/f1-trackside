import React from "react";
import "./About.css";
import "./src/Components/Footer/Footer.css";
import "./src/Components/Footer/Footer.js";

import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Me</title>
        <meta
          name="description"
          content="In this page I will tell you about my learning from TecEd."
        />
        <link rel="canonical" href="/About" />
      </Helmet>
      <main>
        <div className="about-container">
          <h2>In this page I will tell you about my learning from TecEd.</h2>
        </div>
      </main>
      <Footer />
    </>
  );
}
