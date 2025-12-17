import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map((definition, index) => (
        <div key={index}>
          <div className="definition">{definition.definition}</div>

          {definition.example && (
            <div className="example">
              Example: <em>{definition.example}</em>
            </div>
          )}
        </div>
      ))}

      {/* Display synonyms at the meaning level */}
      {props.meaning.synonyms.length > 0 && (
        <Synonyms synonyms={props.meaning.synonyms} />
      )}
    </div>
  );
}
