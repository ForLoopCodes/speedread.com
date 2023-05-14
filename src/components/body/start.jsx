import React, { useState } from "react";

export default function Start(props) {
  const [readSpeed, setReadSpeed] = useState(300);
  const [readContent, setReadContent] = useState(props.readContent);
  return (
    <div className="body start">
      <h1>Start Reading.</h1>
      <h2>What's the context?</h2>
      <textarea
        className="readContent"
        value={readContent}
        placeholder="Paste your text here."
        onChange={(e) => setReadContent(e.target.value)}
      />
      <h2>Adjust the speed (wpm)</h2>
      <div className="multiContainer">
        <button
          onClick={() => {
            if (readSpeed > 100) {
              setReadSpeed(readSpeed - 50);
            }
          }}
        >
          -
        </button>
        <input
          type="number"
          placeholder="350(wpm)"
          value={readSpeed}
          onChange={(e) => setReadSpeed(e.target.value)}
          min={100}
          max={1000}
        />
        <button
          onClick={() => {
            if (readSpeed < 1000) {
              setReadSpeed(readSpeed + 50);
            }
          }}
        >
          +
        </button>
      </div>
      <h2>Functions.</h2>
      <div className="multiContainer">
        <button>Start</button>
        <button>Speed-fade</button>
        <button>Full View (GPT)</button>
      </div>
      <h2>
        Don't get something? <a href="/help">Documentation</a>
      </h2>
    </div>
  );
}
