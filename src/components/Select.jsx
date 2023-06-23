import { useState } from "react";
import { styled } from "styled-components";

const optionData = ["리액트", "자바", "스프링", "자바스크립트", "노드"];

function Select() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const changeValue = (option) => {
    setSelectedOption(option);
  };

  return (
    <StContainer>
      <StH1>Select</StH1>

      {/* 박스 전체에서 클릭이 발생하면 -> 옵션이 open/close 되는 상탯값을 변경 ! */}
      <StSelectBox onClick={() => setIsOpen((prev) => !prev)}>
        <StLabel>{selectedOption || "--- 선택하세요 ---"}</StLabel>
        {/* isOpen인 경우에만 다음의 html 요소들이 만들어 지게! (height=0 같은걸로 제어하지 말고^^) */}
        {isOpen && (
          <StOptions>
            {optionData.map((option) => (
              <StOption key={option} onClick={() => changeValue(option)}>
                {option}
              </StOption>
            ))}
          </StOptions>
        )}
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
  max-height: 110px;

  padding: 0;

  border: 2px solid #4fc0e8;
  border-radius: 5px;

  overflow: scroll;

  // 스크롤바 CSS
  &::-webkit-scrollbar {
    /* display: none; */
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #4fc0e8;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #1976e0;
  }
`;

const StOption = styled.li`
  list-style: none;
  font-size: 16px;
  padding: 6px 20px;
  &:hover {
    margin: 3px;
    background-color: #4fc0e8;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    transition: 0.2s ease-in;
  }
`;
