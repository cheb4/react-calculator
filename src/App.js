import React, { useState, useEffect } from "react";
import "./style.css";
import Btn from "./components/button";
import Screen from "./components/screen";

const App = () => {
  const [DisplayNumber, setDisplayNumber] = useState([]);
  const [Memory, setMemory] = useState([]);
  const [evaluation, setEvaluation] = useState("");

  const operators = (val) => {
    if (DisplayNumber.length === 0) {
      console.log(Memory);
      setDisplayNumber([]);
      return;
    }
    if (Memory.length !== 0) {
      console.log("gggg");
    }
    const convertedNumber = Number(DisplayNumber.join(""));
    setMemory([...Memory, convertedNumber, val]);
    console.log(Memory);
    setDisplayNumber([]);
  };

  const Equals = () => {
    console.log(Memory);
    setMemory([...Memory, Number(DisplayNumber.join(""))]);
    setEvaluation(Memory);
  };

  useEffect(() => {
    if (evaluation !== "") {
      const preEval = Memory.join(" ");
      const evaluated = eval(preEval);
      setDisplayNumber([evaluated]);
      setMemory([]);
      return () => {
        setEvaluation("");
      };
    }
  }, [evaluation]);

  const clearButtonHandler = () => {
    setDisplayNumber([]);
    setMemory([]);
  };

  const buttonHandler = (val) => {
    console.log("pressed button ", val);
    setDisplayNumber([...DisplayNumber, val]);
    console.log(DisplayNumber);
  };
  //
  const NumberButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    .map((ele) => ele.toString(10))
    .map((num) => (
      <Btn
        className="numberKeys"
        style={{ color: "white", background: "silver" }}
        key={num}
        handler={buttonHandler}
        value={num}
      />
    ));
  return (
    <>
      <div className="frame">
        <div className="screen">
          <Screen whatToDisplay={DisplayNumber} memory={Memory} />
        </div>
        <div className="keypad">
          <div className="numbers">{NumberButtons}</div>
          <div className="operators">
            <Btn handler={operators} value="+" />
            <Btn handler={operators} value="-" />
            <Btn handler={operators} value="*" />
            <Btn handler={operators} value="/" />
            <Btn handler={clearButtonHandler} value="clear" />
            <Btn handler={Equals} value="=" />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
