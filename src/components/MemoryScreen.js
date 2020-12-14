import React from "react";

const MemoryScreen = (props) => {
  const { data } = props;
  return (
    <div>
      <h2>{data}</h2>
    </div>
  );
};

export default MemoryScreen;
