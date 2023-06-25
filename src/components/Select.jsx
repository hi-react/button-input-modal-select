import { useEffect, useRef, useState } from "react";
import { styled, css } from "styled-components";

const optionData = ["리액트", "자바", "스프링", "자바스크립트", "노드"];

function Select() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const targetRef = useRef(null);

  // [추가 기능] Select 박스 영역 외곽을 누르면 항목이 닫히도록!
  useEffect(() => {
    const clickOutsideHandler = (event) => {
      if (!targetRef.current.contains(event.target)) setIsOpen(false);
    };
    window.addEventListener("mousedown", clickOutsideHandler);
    return () => {
      window.removeEventListener("mousedown", clickOutsideHandler);
    };
  }, []);

  // [추가 기능] esc 버튼 눌러도 항목이 닫히도록 !
  useEffect(() => {
    const escCloseHandler = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", escCloseHandler);
    return () => {
      window.removeEventListener("keydown", escCloseHandler);
    };
  }, []);

  // [추가 기능] 방향키로 옵션 항목을 선택할 수 있게 해보자
  useEffect(() => {
    const keyUpDownHandler = (event) => {
      // 아래 방향키
      if (event.key === "ArrowDown") {
        event.preventDefault();
        setIsOpen(true);
        const currentIndex = selectedOption
          ? optionData.findIndex((option) => option === selectedOption)
          : -1;
        const nextIndex = (currentIndex + 1) % optionData.length;
        console.log(currentIndex, nextIndex);
        setSelectedOption(optionData[nextIndex]);
        const optionElement = document.getElementById(`option-${nextIndex}`);
        optionElement.scrollIntoView({ block: "nearest" });
        // 위 방향키
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setIsOpen(true);
        const currentIndex = selectedOption
          ? optionData.findIndex((option) => option === selectedOption)
          : -1;
        const previousIndex =
          (currentIndex - 1 + optionData.length) % optionData.length;
        setSelectedOption(optionData[previousIndex]);
        const optionElement = document.getElementById(
          `option-${previousIndex}`
        );
        optionElement.scrollIntoView({ block: "nearest" });
      }
    };
    window.addEventListener("keydown", keyUpDownHandler);
    return () => {
      window.removeEventListener("keydown", keyUpDownHandler);
    };
  }, [selectedOption]);

  return (
    <StContainer>
      <StH1>Select</StH1>

      {/* 박스 전체에서 클릭이 발생하면 -> 옵션이 open/close 되는 상탯값을 변경 ! */}
      <StSelectBox ref={targetRef} onClick={() => setIsOpen((prev) => !prev)}>
        <StLabel>{selectedOption || "--- 선택하세요 ---"}</StLabel>
        {/* isOpen인 경우에만 다음의 html 요소들이 만들어 지게! (height=0 같은걸로 제어하지 말고^^) */}
        {isOpen && (
          <StOptions>
            {optionData.map((option, index) => (
              <StOption
                // [추가 기능] 방향키로 선택 항목 제어: boolean(true/false 반환)
                id={`option-${index}`}
                selected={selectedOption === option}
                key={option}
                onClick={() => setSelectedOption(option)}
              >
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
  /* 방향키로 옵션 선택 항목 제어 */
  ${({ selected }) => {
    return (
      selected &&
      css`
        margin: 3px;
        background-color: #4fc0e8;
        border-radius: 5px;
        color: white;
        cursor: pointer;
        transition: 0.3s ease-in;
      `
    );
  }}
`;
