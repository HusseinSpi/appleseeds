import React, { useState } from "react";
import TapButton from "./TapButton.jsx";
import { EXAMPLES } from "../data.js";
import Section from "./Sections.jsx";
import Taps from "./Taps.jsx";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tapContent;

  if (selectedTopic) {
    tapContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  } else {
    tapContent = <p>Please select a topic</p>;
  }

  return (
    <Section title="Examples" id="examples">
      <Taps
        buttons={
          <>
            <TapButton
              onClick={() => handleSelect("components")}
              isSelected={selectedTopic === "components"}
            >
              Components
            </TapButton>
            <TapButton
              onClick={() => handleSelect("jsx")}
              isSelected={selectedTopic === "jsx"}
            >
              JSX
            </TapButton>
            <TapButton
              onClick={() => handleSelect("props")}
              isSelected={selectedTopic === "props"}
            >
              Props
            </TapButton>
            <TapButton
              onClick={() => handleSelect("state")}
              isSelected={selectedTopic === "state"}
            >
              State
            </TapButton>
          </>
        }
      >
        {tapContent}
      </Taps>
    </Section>
  );
}
