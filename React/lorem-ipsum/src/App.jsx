import React, { useState } from "react";
import FormField from "./FormField";
import GenerateParagraphs from "./GenerateParagraphs";

const App = () => {
  const [numParagraph, setNumParagraph] = useState(1);
  const [generateParagraph, setGenerateParagraph] = useState(false);

  const handleChange = (e) => {
    setNumParagraph(e.target.value);
    setGenerateParagraph(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGenerateParagraph(true);
  };

  return (
    <>
      <h2>tired of boring lorem ipsum?</h2>
      <form onSubmit={handleSubmit}>
        <FormField numberChange={handleChange} />
        {generateParagraph && <GenerateParagraphs number={numParagraph} />}
      </form>
    </>
  );
};

export default App;
