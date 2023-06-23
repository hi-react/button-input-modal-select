import { useState } from "react";
import { styled } from "styled-components";

const optionData = [
  {
    key: "react",
    value: "리액트",
  },
  {
    key: "java",
    value: "자바",
  },
  {
    key: "spring",
    value: "스프링",
  },
];

function Select() {
  const [openOptions, setOpenOptions] = useState(false);
  const [currentValue, setCurrentValue] = useState("리액트");

  const changeValue = (event) => {
    setCurrentValue(event.target.getAttribute("value"));
  };

  return (
    <StContainer>
      <StH1>Select</StH1>

      <StSelectBox onClick={() => setOpenOptions((prev) => !prev)}>
        <StLabel>{currentValue}</StLabel>

        <StOptions show={openOptions}>
          {optionData.map(({ key, value }) => (
            <StOption key={key} value={value} onClick={changeValue}>
              {value}
            </StOption>
          ))}
        </StOptions>
      </StSelectBox>
    </StContainer>
  );
}

export default Select;

// styled-components
const StContainer = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

const StH1 = styled.h1`
  margin-top: 50px;
  font-weight: 700;
`;

const StSelectBox = styled.div`
  position: relative;
  width: 30%;
  margin-bottom: 100px;
  padding: 8px;
  border: 2px solid #4fc0e8;
  border-radius: 5px;

  /* 이거 나중에 react-icon으로 바꾸자 -> youtube 보고.. */
  &::before {
    content: "⌵";
    position: absolute;
    top: 2px;
    right: 15px;
    color: #4fc0e8;
    font-size: 20px;
    font-weight: 900;
    cursor: pointer;
  }
`;

const StLabel = styled.label`
  font-size: 15px;
  padding-left: 15px;
`;

const StOptions = styled.ul`
  position: absolute;
  top: 30px;
  left: 0px;

  width: 100%;

  max-height: ${(props) => (props.show ? "none" : "0")};

  padding: 0;

  border: ${(props) => (props.show ? "2px solid #4fc0e8" : "none")};
  border-radius: 5px;

  overflow: hidden;
`;

const StOption = styled.li`
  list-style: none;
  font-size: 16px;
  padding: 6px 20px;
  &:hover {
    margin: 3px;
    background-color: #4fc0e8;
    border-radius: 5px;
    transition: background-color 0.2s ease-in;
  }
`;
