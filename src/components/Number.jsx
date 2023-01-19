import React from 'react'
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Number = (props) => {

    return (
      <div>
        <h1 style={{ color: "blue" }}>The number is: {props.number}</h1>
        <Link to={"/number"}>Go to Number </Link>|
        <Link to={"/word/wcolor/bcolor"}>Go to Change Color</Link>|
        <Link to={"/word"}>Go to Word</Link>
      </div>
    );
  };


export default Number;
