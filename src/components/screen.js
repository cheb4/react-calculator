import React from "react";

const screen = (props) => {
  const { whatToDisplay } = props;
  return (
    <div>
      <h1>{whatToDisplay.length === 0 ? "0" : whatToDisplay}</h1>
    </div>
  );
};

export default screen;
