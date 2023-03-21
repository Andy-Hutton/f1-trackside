import "./Home.css";
import React from "react";

import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="This is the main homepage for the air bnb clone react site."
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <main>
        <div className="home-main-container container">
          <h2>This is the Home page.</h2>
        </div>
      </main>
    </>
  );
}
