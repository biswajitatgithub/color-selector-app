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
  background-color: rgb(
    ${(props) => props.redCode},
    ${(props) => props.greenCode},
    ${(props) => props.blueCode}
  );
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
  & .hex-color-code .selected-color {
    width: 3rem;
    height: 3rem;
    background-color: rgb(
      ${(props) => props.redCode},
      ${(props) => props.greenCode},
      ${(props) => props.blueCode}
    );
    border: 2px solid
      rgb(
        ${(props) => props.redCode - 77},
        ${(props) => props.greenCode - 107},
        ${(props) => props.blueCode - 222}
      );
  }
`;

function App() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const onSliderChange = (color, value) => {
    if (color === "red") setRed(value);
    else if (color === "green") setGreen(value);
    else if (color === "blue") setBlue(value);
  };
  return (
    <ColorSelector redCode={red} greenCode={green} blueCode={blue}>
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
            <div className="selected-hexcode"></div>
          </div>
        </div>
      </div>
    </ColorSelector>
  );
}

export default App;
