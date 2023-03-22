import React from "react";

export default function About() {
  return (
    <>
      <title>About Me</title>
      {/* <meta
        name="description"
        content="In this page I will tell you about my learning from TecEd."
      />
      <link rel="canonical" href="/About" /> */}

      <main>
        <div className="about-container">
          <h2>In this page I will tell you about my learning from TecEd.</h2>
          <p>
            Problem Domain
            <br /> I have found that the Formula One pages on the internet
            contain complex and hard to navigate information. <br />
            There is a lack of simple and easy to view pages for an on-the-go
            style read whilst on your mobile. <br />
            As a user I would like to be able to find out where and when the
            next race is. <br />
            As a user I want to be able to access information relating to the
            driver and constructor standings.
            <br />
            As a user I would like to engage with other fans commenting on
            performances and predictions.
            <br />
            Stretch goals Focus on a desktop version that would encorparate
            parts of a previous project including a game.
            <br />
            Creating a gallery of wallpapers for users to download.
            <br />
            Create a light/ dark mode.
          </p>
        </div>
      </main>
    </>
  );
}
