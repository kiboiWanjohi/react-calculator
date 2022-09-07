import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import * as math from "mathjs";
const App = () => {
  const [text, setText] = useState(" ");
  const [result, setResult] = useState(" ");
  const addToText = (val) => {
    setText((text) => [...text, val + " "]);
  };
  const resetInput = () => {
    setText("");
    setResult("");
  };
  const calculateResult = () => {
    const input = text.join("");
    setResult(math.evaluate(input));
  };
  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input text={text} result={result} />
        <div className="row">
          <Button symbol={9} handleClick={addToText} />
          <Button symbol={8} handleClick={addToText} />
          <Button symbol={7} handleClick={addToText} />
          <Button symbol={"/"} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol={6} handleClick={addToText} />
          <Button symbol={5} handleClick={addToText} />
          <Button symbol={4} handleClick={addToText} />
          <Button symbol={"*"} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol={3} handleClick={addToText} />
          <Button symbol={2} handleClick={addToText} />
          <Button symbol={1} handleClick={addToText} />
          <Button symbol={"+"} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol={0} handleClick={addToText} />
          <Button symbol={"-"} handleClick={addToText} />
          <Button symbol={"."} handleClick={addToText} />
          <Button symbol={"="} handleClick={calculateResult} />
        </div>
        <Button symbol={"clear"} handleClick={resetInput} />
      </div>
    </div>
  );
};

export default App;
