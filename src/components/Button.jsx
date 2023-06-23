import React from "react";
import { css, styled } from "styled-components";

// [과제] font awesome이나 https://react-icons.github.io/react-icons/ 에서 Icon 넣어보기
const ButtonContainer = ({ children, ...rest }) => {
  return (
    <>
      <StButton {...rest}>
        {children} {rest.icon}
      </StButton>
    </>
  );
};

function Button() {
  return (
    <StContainer>
      <StH1>Button</StH1>

      <StButtonRow>
        <ButtonContainer
          onClick={() => {
            alert("hello");
          }}
          bc="#4fc0e8"
          size="large"
          outlined="true"
          icon=">"
        >
          Large Primary Button
        </ButtonContainer>
        <ButtonContainer bc="#4fc0e8" color="#ffffff" size="medium">
          Medium
        </ButtonContainer>
        <ButtonContainer bc="#4fc0e8" color="#ffffff" size="small">
          Small
        </ButtonContainer>
      </StButtonRow>
      <StButtonRow>
        <ButtonContainer
          onClick={() => {
            prompt("어려워여");
          }}
          bc="#e84f82"
          size="large"
          outlined="true"
        >
          Large Primary Button
        </ButtonContainer>
        <ButtonContainer bc="#e84f82" color="#ffffff" size="medium">
          Medium
        </ButtonContainer>
        <ButtonContainer bc="#e84f82" color="#ffffff" size="small">
          Small
        </ButtonContainer>
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

const StButton = styled.button`
  background-color: ${({ bc }) => bc};
  border: none;
  border-radius: 10px;
  font-weight: 700;
  color: ${({ color }) => color};
  cursor: pointer;

  ${({ size }) => {
    switch (size) {
      case "large":
        return css`
          height: 50px;
          width: 200px;
        `;
      case "medium":
        return css`
          height: 45px;
          width: 150px;
        `;
      case "small":
        return css`
          height: 40px;
          width: 120px;
        `;

      default:
        break;
    }
  }}

  // 어이가 없네! 이게 border랑 background-color보다 위에 있으면 적용 안됨.
${({ outlined, bc }) => {
    if (outlined) {
      return css`
        border: 3px solid ${bc};
        background-color: #fff;
      `;
    }
  }}
`;
