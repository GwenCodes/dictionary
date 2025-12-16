import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms.length > 0) {
    return (
      <span className="synonyms">
        <strong>Synonyms: </strong>
        {props.synonyms.join(", ")}
      </span>
    );
  } else {
    return null;
  }
}
