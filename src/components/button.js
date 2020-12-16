import React from "react";

const button = (props) => {
  const { handler, value } = props;

  return (
    <>
      <button
        onClick={() => {
          handler(value);
        }}
      >
        {value}
      </button>
    </>
  );
};

export default button;
