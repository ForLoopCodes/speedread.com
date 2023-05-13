import React, { useState } from "react";

export default function Start(props) {
  const [readContent, setReadContent] = useState(props.readContent);
  return (
    <div className="body start">
      <h1>Start Reading</h1>
      <textarea
        className="readContent"
        value={readContent}
        onChange={(e) => setReadContent(e.target.value)}
      />
    </div>
  );
}
