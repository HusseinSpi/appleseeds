import { useEffect } from "react";

const Box = ({ id, size, removeBox }) => {
  useEffect(() => {
    const timeoutID = setTimeout(() => {
      removeBox(id);
    }, 4000);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [id, removeBox]);

  const boxStyle = {
    width: size,
    height: size,
    backgroundColor: "blue",
    margin: "10px",
  };

  return <div className="box" style={boxStyle}></div>;
};

export default Box;
