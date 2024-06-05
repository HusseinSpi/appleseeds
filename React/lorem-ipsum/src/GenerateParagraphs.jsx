import React from "react";
import text from "./data";

function GenerateParagraphs({ number }) {
  return (
    <div>
      {text.slice(0, number).map((item, index) => {
        return (
          <div key={index}>
            <p>{item}</p>
            <p>---------------------------------------</p>
          </div>
        );
      })}
    </div>
  );
}

export default GenerateParagraphs;
