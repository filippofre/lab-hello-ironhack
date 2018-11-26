import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

import "./App.css";

ReactDOM.render(
  <section className="sans-ser-font">
    <div className="bg pad-40">
      <nav>
        <img src="../images/ironhack-logo.svg"></img>

        <img src="../images/menu-top.svg"></img>
      </nav>

      <div className="width-50">
      <h1 className="color-white">Say hello to ReactJS</h1>
      <p className="color-white p-h1">You will learn a Fronte-end framework from scratch,to become an Ninka developer.</p>

      <button>Awesome!</button>
      </div>
    </div>

    <div className="flex j-center pad-40">
      <div className="pad-40">
        <img src="../images/icon1.png"></img>
        <h3 className="">Declarative</h3>
        <p className="">React makes it painless to create interactive UIs.</p>
      </div>

      <div className="pad-40">
        <img src="../images/icon2.png" className=""></img>
        <h3 className="">Components</h3>
        <p className="">Build encapsulated components that manage their state.</p>
      </div>

      <div className="pad-40">
        <img src="../images/icon3.png"></img>
        <h3 className="">Single-Way</h3>
        <p className="">A set of immutable values are passed to the component's.</p>
      </div>

      <div className="pad-40">
        <img src="../images/icon4.png"></img>
        <h3 className="">JSX</h3>
        <p className="">Statistically-typed, designed to run on modern browsers.</p>
      </div>
    </div>

    <App />
  </section>,
  document.getElementById("root")
);
