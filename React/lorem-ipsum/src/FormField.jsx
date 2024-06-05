import React from "react";
import text from "./data";

function FormField({ numberChange }) {
  return (
    <>
      <label htmlFor="number">Paragraphs: </label>
      <input type="number" min={1} max={text.length} onChange={numberChange} />
      <button type="submit">generate</button>
    </>
  );
}

export default FormField;
