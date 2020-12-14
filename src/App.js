import React, { useState } from "react";

import Btn from "./components/button";
import Screen from "./components/screen";

const App = () => {
  const [DisplayNumber, setDisplayNumber] = useState([]);
  const [Memory, setMemory] = useState([]);

  const operators = (val) => {
    if (DisplayNumber.length === 0) {
      console.log(Memory);
      setDisplayNumber([]);
      return;
    }
    const convertedNumber = Number(DisplayNumber.join(""));
    setMemory([...Memory, convertedNumber, val]);
    console.log(Memory);
    setDisplayNumber([]);
  };

  const equals = () => {
    const convertedNumber = Number(DisplayNumber.join(""));
    setMemory([...Memory, convertedNumber]);
    // function parse(str) {
    //   return Function(`'use strict'; return (${str})`)();
    // }
    const joined = Memory.join(" ");
    console.log(joined);
    // const parsed = eval();
    // console.log(parsed);
    // setDisplayNumber(parsed);
  };

  const clearButtonHandler = () => {
    setDisplayNumber([]);
  };

  const buttonHandler = (val) => {
    console.log("pressed button ", val);
    setDisplayNumber([...DisplayNumber, val]);
    console.log(DisplayNumber);
  };
  //
  const NumberButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    .map((ele) => ele.toString(10))
    .map((num) => <Btn key={num} handler={buttonHandler} value={num} />);
  //
  return (
    <div>
      <Screen whatToDisplay={DisplayNumber} memory={Memory} />
      {NumberButtons}
      <Btn handler={clearButtonHandler} value="clear" />
      <Btn handler={operators} value="+" />
      <Btn handler={operators} value="-" />
      <Btn handler={operators} value="*" />
      <Btn handler={operators} value="/" />
      <Btn handler={equals} value="=" />
    </div>
  );
};

export default App;
