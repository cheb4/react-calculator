import React, { useState } from "react";

import Btn from "./components/button";
import Screen from "./components/screen";

const App = () => {
  const [DisplayNumber, setDisplayNumber] = useState([]);

  const buttonHandler = (val) => {
    console.log("pressed button ", val);
    setDisplayNumber([...DisplayNumber, val]);
    console.log(DisplayNumber);
  };
  //
  const NumberButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    .map((ele) => ele.toString(10))
    .map((num) => <Btn key={num} handler={buttonHandler} value={num} />);
  //
  return (
    <div>
      opa
      <Screen whatToDisplay={DisplayNumber} />
      {NumberButtons}
    </div>
  );
};

export default App;
