import React, {useState} from "react";
import Display from "./display";
import ButtonPanel from "./buttonPanel";
import calculate from "../logic/calculate";
import "./calculator.css";

function Calculator () {

  return (
    <div className="component-app">
      <Display />
      <ButtonPanel />
    </div>
  )
}

export default Calculator