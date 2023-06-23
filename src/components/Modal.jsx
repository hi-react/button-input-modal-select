import React, { useState } from "react";
import { styled } from "styled-components";
import ModalPopup from "./ModalPopup";

function Modal() {
  // useState로 modal open 상태 변경 -> true = open
  const [modal, setModal] = useState(false);
  const [outsideClose, setOutsideClose] = useState(true);

  const openModal = (shouldOutsideClose) => {
    setModal(true);
    setOutsideClose(shouldOutsideClose);
  };

  const closeModal = () => {
    setModal(false);
    setOutsideClose(true);
  };

  return (
    <StContainer>
      <StH1>Modal</StH1>

      <StModalButton>
        <StButton1 onClick={() => openModal(true)}>open modal</StButton1>
        <ModalPopup
          modal={modal}
          closeModal={closeModal}
          outsideClose={outsideClose}
        ></ModalPopup>

        <StButton2 onClick={() => openModal(false)}>open modal</StButton2>
        <ModalPopup
          modal={modal}
          closeModal={closeModal}
          outsideClose={outsideClose}
        ></ModalPopup>
      </StModalButton>
    </StContainer>
  );
}

export default Modal;

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

const StModalButton = styled.div`
  display: flex;
  gap: 10px;
`;

const StButton1 = styled.button`
  height: 50px;
  width: 150px;
  background-color: #4fc0e8;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  color: white;
  cursor: pointer;
`;

const StButton2 = styled.button`
  height: 50px;
  width: 150px;
  background-color: transparent;
  border: 3px solid #e84f82;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
`;
