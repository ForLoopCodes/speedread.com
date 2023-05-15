import React, { useState, useEffect } from "react";

export default function Start(props) {
  const [readSpeed, setReadSpeed] = useState(50);
  const [isReading, setIsReading] = useState(false);
  const [readingMode, setReadingMode] = useState("normal"); // ["normal", "speed-fade", "full-view"]
  const [readContent, setReadContent] = useState(props.readContent);
  const [liveWord, setLiveWord] = useState("");

  useEffect(() => {
    if (isReading) {
      let words = readContent.split(" ");
      let i = 0;
      let interval = setInterval(() => {
        if (i < words.length) {
          setLiveWord(words[i]);
          i++;
        } else {
          clearInterval(interval);
          setIsReading(false);
        }
      }, 60000 / readSpeed);
    } else {
      setLiveWord("");
    }
  }, [isReading, readSpeed, readContent]);

  return (
    <div className="body start">
      <div className={isReading ? "startForm hiddenBody" : "startForm"}>
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
              if (parseInt(readSpeed) > 100) {
                setReadSpeed(parseInt(readSpeed) - 50);
              }
            }}
          >
            -
          </button>
          <input
            type="number"
            placeholder="350(wpm)"
            value={parseInt(readSpeed)}
            onChange={(e) => setReadSpeed(e.target.value)}
            min={1}
            max={1000}
          />
          <button
            onClick={() => {
              if (parseInt(readSpeed) < 1000) {
                setReadSpeed(parseInt(readSpeed) + 50);
              }
            }}
          >
            +
          </button>
        </div>
        <h2>Functions.</h2>
        <div className="multiContainer">
          <button
            onClick={() => {
              setIsReading(true);
            }}
          >
            Start
          </button>
          <button>Speed-fade</button>
          <button>Full View (GPT)</button>
        </div>
        <h2>
          Don't get something? <a href="/help">Documentation</a>
        </h2>
      </div>
      <div className={isReading ? "readingBody" : "readingBody hiddenBody"}>
        <div className="multiContainer">
          <button
            onClick={() => {
              setIsReading(false);
            }}
          >
            Stop
          </button>
          <div className="reader">
            <h1>{liveWord}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
