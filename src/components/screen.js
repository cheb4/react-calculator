import React from "react";
import MemoryScreen from "./MemoryScreen";
const screen = (props) => {
  const { whatToDisplay, memory } = props;
  return (
    <div>
      <MemoryScreen data={memory} />
      <h1>{whatToDisplay.length === 0 ? "0" : whatToDisplay}</h1>
    </div>
  );
};

export default screen;
