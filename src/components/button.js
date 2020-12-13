import React from "react";

const button = (props) => {
  const { handler, value } = props;

  return (
    <div>
      <button
        onClick={() => {
          handler(value);
        }}
      >
        {value}
      </button>
    </div>
  );
};

export default button;
