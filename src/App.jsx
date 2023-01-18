import { useParams } from "react-router";
import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      <h1 style={{ color: "red" }}>Welcome</h1>
      {/* <Link to={"/about"}>Go to About </Link> */}
    </div>
  );
};

const Number = (props) => {
  const { number } = useParams();

  return (
    <div>
      <h1 style={{ color: "blue" }}>The number is: {number}</h1>
      {/* <Link to={"/"}>Go Home</Link> */}
    </div>
  );
};

const Word = (props) => {
  const { word } = useParams();

  return <h1 style={{ color: "blue" }}>The word is: {word} </h1>;
};

const ChangeColor = (props) => {
  const { wcolor } = useParams();
  const { word } = useParams();
  const { bcolor } = useParams();

  return (
    <h1 style={{ color: wcolor, backgroundColor: bcolor }}>
      The word is: {word}
    </h1>
  );
};


function App() {
  return (
    <div>
      <h1>Routing Example</h1>

      <Routes>
        <Route path="/:number" element={<Number />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:word" element={<Word />} />
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