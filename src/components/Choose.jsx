import React from 'react'
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Word from './Word';
import Number from './Number';

const Choose = () => {
    const { input } = useParams();

    return (
      isNaN(input)? <Word word={input} />: <Number number={input} />
      
    );
  };


export default Choose;