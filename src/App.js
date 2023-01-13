import React, { useState } from "react";
import SliderInput from "./Components/Slider/SliderInput";
import styled from "styled-components";
import "./App.css";

const ColorSelector = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
  & .color-selector-panel {
    width: 30%;
    background-color: #ddd;
    padding: 2rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    & .color {
      display: grid;
      grid-auto-flow: row;
      grid-template-columns: 4fr 1fr;
    }
  }
  & header {
    margin-bottom: 2rem;
    text-align: center;
  }
  & .hex-color-code{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  & .hex-color-code .selected-color {
    width: 3rem;
    height: 3rem;
    background-color: ${(props) => props.color};
    border: 2px solid #000;
  }
  & .hex-copy{
    padding: .5rem 1rem;
    background-color: #000;
    color:white;
    cursor: pointer;
  }
  & .author-desc{
    padding-top:1rem;
    grid-column: 1/3;
    & p{
      text-align:center;
      font-size:1rem;
      & a{
        text-decoration:underline;
        color:#3CBAFF;
        font-style: oblique;
      }
    }
  }
`;

function App() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [copy, setCopy] = useState(false);

  let redHex = Number(red).toString(16);
  let greenHex = Number(green).toString(16);
  let blueHex = Number(blue).toString(16);

  redHex = redHex.length === 1 ? "0" + redHex : redHex;
  greenHex = greenHex.length === 1 ? "0" + greenHex : greenHex;
  blueHex = blueHex.length === 1 ? "0" + blueHex : blueHex;
 
  let hexString = ("#"+redHex+greenHex+blueHex).toUpperCase();

  const onSliderChange = (color, value) => {
    if (color === "red") setRed(value);
    else if (color === "green") setGreen(value);
    else if (color === "blue") setBlue(value);
    setCopy(false);
  };
  const copyOnClickHandler = (event) => {
    event.preventDefault();
    navigator.clipboard.writeText(hexString);
    setCopy(true);
  };
  return (
    <ColorSelector color={hexString}>
      <div className="color-selector-panel">
        <header>
          <h1>Select Color</h1>
        </header>
        <div className="color">
          <div className="selector">
            <SliderInput
              onSliderChange={onSliderChange}
              currentValue={red}
              color={"red"}
              name={"red"}
              min={"0"}
              max={"255"}
            />
            <SliderInput
              onSliderChange={onSliderChange}
              currentValue={green}
              color={"green"}
              name={"green"}
              min={"0"}
              max={"255"}
            />
            <SliderInput
              onSliderChange={onSliderChange}
              currentValue={blue}
              color={"blue"}
              name={"blue"}
              min={"0"}
              max={"255"}
            />
          </div>
          <div className="hex-color-code">
            <div className="selected-color"></div>
            <div className="selected-hexcode">{hexString}</div>
            <button onClick={copyOnClickHandler} className="hex-copy">
              {copy ? "Copied!" : "Copy"}
            </button>
          </div>
          <div className="author-desc">
            <p>Designed & Developed<a href="https://github.com/biswajitatgithub" target="_blank" rel="noreferrer" > <br/>by Biswajit Sharma</a></p>
          </div>
        </div>
      </div>
    </ColorSelector>
  );
}

export default App;
