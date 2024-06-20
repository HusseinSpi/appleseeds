import { useState } from "react";
import Box from "./components/Box";
import "./App.css";

const App = () => {
  const [boxes, setBoxes] = useState([
    { id: 1, size: "100px" },
    { id: 2, size: "150px" },
    { id: 3, size: "200px" },
  ]);

  const removeBox = (id) => {
    setBoxes((prevBoxes) => prevBoxes.filter((box) => box.id !== id));
  };

  return (
    <div>
      {boxes.map((box) => (
        <Box key={box.id} id={box.id} size={box.size} removeBox={removeBox} />
      ))}
    </div>
  );
};

export default App;
