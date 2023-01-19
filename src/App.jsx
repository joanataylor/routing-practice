import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import ChangeColor from "./components/ChangeColor";
import Choose from "./components/Choose";


function App() {
  return (
    <div>
      <h1>Routing Example</h1>
      <Link to={"/home"}>Go Home</Link>


      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:input" element={<Choose />} />
        <Route path="/:word/:wcolor/:bcolor" element={<ChangeColor />} />
      </Routes>
    </div>
  );
}

export default App;


      {/* <p>
        <Link to="/location/seattle">Seattle</Link>|
        <Link to="/location/chicago">Chicago</Link>|
        <Link to="/location/burbank">Burbank</Link>
      </p> */}

      {/* <form onSubmit={sendSurvey}>
        <label>Your Name:</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label>Your Comment:</label>
        <textarea
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        ></textarea>
        <input type="submit" value="Submit Survey" />
      </form> */}