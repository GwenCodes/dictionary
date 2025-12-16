import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>

      {props.meaning.definitions.map((definition, index) => (
        <div key={index} className="definition-block">
          <p>
            <strong>Definition:</strong> {definition.definition}
          </p>

          {definition.example && (
            <p>
              Example: <em>{definition.example}</em>
            </p>
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
