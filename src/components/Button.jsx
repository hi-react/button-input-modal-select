import React from "react";
import { styled } from "styled-components";

function Button() {
  return (
    <StContainer>
      <StH1>Button</StH1>
      <StButtonRow>
        <StButton1
          onClick={() => {
            alert("hello");
          }}
        >
          Large Primary Button
        </StButton1>
        <StButton2>Medium</StButton2>
        <StButton3>Small</StButton3>
      </StButtonRow>
      <StButtonRow>
        <StButton4
          onClick={() => {
            prompt("어려워여");
          }}
        >
          Large Primary Button
        </StButton4>
        <StButton5>Medium</StButton5>
        <StButton6>Small</StButton6>
      </StButtonRow>
    </StContainer>
  );
}

export default Button;

// styled-components
const StContainer = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

const StH1 = styled.h1`
  font-weight: 700;
`;

const StButtonRow = styled.div`
  display: flex;
  gap: 10px;
`;

const StButton1 = styled.button`
  height: 50px;
  width: 200px;
  background-color: transparent;
  border: 3px solid #4fc0e8;
  border-radius: 10px;
  font-weight: 700;
  // color: white;
  cursor: pointer;
`;

const StButton2 = styled.button`
  height: 50px;
  width: 150px;
  background-color: #4fc0e8;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  color: white;
  cursor: pointer;
`;

const StButton3 = styled.button`
  height: 45px;
  width: 120px;
  background-color: #4fc0e8;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  color: white;
  cursor: pointer;
`;

const StButton4 = styled.button`
  height: 50px;
  width: 200px;
  background-color: transparent;
  border: 3px solid #e84f82;
  border-radius: 10px;
  font-weight: 700;
  // color: white;
  cursor: pointer;
`;

const StButton5 = styled.button`
  height: 50px;
  width: 150px;
  background-color: #e84f82;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  color: white;
  cursor: pointer;
`;

const StButton6 = styled.button`
  height: 45px;
  width: 120px;
  background-color: #e84f82;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  color: white;
  cursor: pointer;
`;
