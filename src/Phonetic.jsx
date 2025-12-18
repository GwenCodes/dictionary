import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  function playAudio() {
    if (props.phonetic.audio) {
      const audio = new Audio(props.phonetic.audio);
      audio.play();
    }
  }

  return (
    <div className="Phonetic">
      {props.phonetic.audio && (
        <button className="audio-button" onClick={playAudio}>
          🔊 {/* speaker symbol */}
        </button>
      )}
      <span className="phonetic-text">{props.phonetic.text}</span>
    </div>
  );
}
