import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const ChangeColor = (props) => {
  const { wcolor } = useParams();
  const { word } = useParams();
  const { bcolor } = useParams();

  return (
    <div>
      <h1 style={{ color: wcolor, backgroundColor: bcolor }}>
        The word is: {word}
      </h1>
      <Link to={"/number"}>Go to Number </Link>|
      <Link to={"/word/wcolor/bcolor"}>Go to Change Color</Link>|
      <Link to={"/word"}>Go to Word</Link>
    </div>
  );
};

export default ChangeColor;
