import React from "react";
import styled from "styled-components";

const Slide = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  & .color-holder {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 0.5rem;
  }
  & .color {
    width: 1.5rem;
    height: 1.5rem;
    background-color: ${(props) => props.color};
    border-radius: 50%;
    margin-right: 0.2rem;
  }
  & .range {
    margin-bottom: 0.6rem;
    width: 100%;
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: 1fr 4fr 1fr;
    grid-column-gap: 0.5rem;
    & .min {
      justify-self: end;
    }
    & .max {
      justify-self: start;
    }
  }
`;

const SliderInput = (props) => {
  const sliderChangeHandler = (event) => {
    props.onSliderChange(event.target.id, event.target.value);
  };
  return (
    <Slide color={props.color}>
      <div className="color-holder">
        <div className="color"></div>
        <span>{props.currentValue}</span>
      </div>
      <div className="range">
        <div className="min">{props.min}</div>
        <input
          type="range"
          name={props.name}
          id={props.name}
          min={props.min}
          max={props.max}
          onChange={sliderChangeHandler}
          defaultValue = "0"
        />
        <span className="max">{props.max}</span>
      </div>
    </Slide>
  );
};

export default SliderInput;
