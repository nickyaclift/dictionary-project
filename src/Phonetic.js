import React from "react";
import "./Phonetics.css";


export default function Phonetic(props) {
  return (
    <div className="phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        {props.phonetic.text}
      </a>
    </div>
  );
}
