import React, { useState } from "react";
import { styled } from "styled-components";

function Input() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 저장하기 버튼
  const saveButton = (event) => {
    event.preventDefault();
    if (name.trim() === "" || price.trim() === "") {
      alert("이름과 가격을 모두 입력해주세요!");
      setName("");
      setPrice("");
      return;
    }
    // alert 띄울 때는 또 콤마(,)를 없애라신다..
    const noCommaPrice = price.replaceAll(",", "");
    alert(`이름: ${name}, 가격: ${noCommaPrice}원 입니다`);
    setName("");
    setPrice("");
  };

  // Input price 천 단위 콤마 찍기 (toLocaleString)
  const formatPrice = (price) => {
    const numericPrice = parseInt(price.replace(/[^0-9]/g, ""), 10);
    if (isNaN(numericPrice)) {
      return "";
    }
    return numericPrice.toLocaleString();
  };

  return (
    <StContainer>
      <StH1>Input</StH1>

      <StInputForm onSubmit={saveButton}>
        <label>이름: </label>
        <StInputName
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="이름을 입력해주세요."
        />
        <label>가격: </label>
        <StInputPrice
          value={price}
          onChange={(event) => setPrice(formatPrice(event.target.value))}
          placeholder="가격을 입력해주세요."
          maxLength="15"
        />
        <StButton>저장</StButton>
      </StInputForm>
    </StContainer>
  );
}

export default Input;

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

const StInputForm = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StInputName = styled.input`
  height: 30px;
  padding-left: 20px;
  border: 2px solid #1976e0;
  border-radius: 6px;
  text-align: left;
`;

const StInputPrice = styled.input`
  height: 30px;
  padding-right: 20px;
  border: 2px solid #1976e0;
  border-radius: 6px;
  text-align: right;
`;

const StButton = styled.button`
  height: 35px;
  width: 90px;

  background-color: #1976e0;

  border: none;
  border-radius: 6px;

  font-weight: 700;
  color: white;

  cursor: pointer;
`;
