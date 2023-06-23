import React from "react";
import { styled } from "styled-components";

function ModalPopup({ isOpen, closeModal, outsideClose }) {
  // outsideClose 상태가 true인 첫 번째 modal만 background를 선택했을 때도 modal이 닫힘
  const backgroundClickHandler = () => {
    if (outsideClose) {
      closeModal();
    }
  };

  return (
    <>
      {isOpen && (
        <StDiv onClick={backgroundClickHandler}>
          <StSection>
            <StHeader>Modal 세상에 온 걸 환영해..</StHeader>
            <StMain>팝업창입니다!</StMain>
            <StFooter>
              {/* outsideClose 상태가 false인 두 번째 modal만 확인 버튼 하나더 추가! */}
              {outsideClose === false && (
                <StButton
                  onClick={() => {
                    alert(`모달을 닫아주세요..`);
                  }}
                >
                  확인
                </StButton>
              )}
              <StButton onClick={closeModal}>close</StButton>
            </StFooter>
          </StSection>
        </StDiv>
      )}
    </>
  );
}

export default ModalPopup;

const StDiv = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.5);

  // fadeIn 애니메이션
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation: fadeIn 600ms forwards;
`;

const StSection = styled.section`
  width: 90%;
  max-width: 450px;
  margin: auto;
  background-color: #f6f7fb;
  border-radius: 5px;
  /* overflow: hidden; */
`;

const StHeader = styled.header`
  padding: 20px;
  background-color: #e0f0fe;
  border-radius: 5px;
  font-weight: 700;
`;

const StMain = styled.main`
  padding: 35px;
  border-top: 1px solid #5fb1f9;
  border-bottom: 1px solid #5fb1f9;
`;

const StFooter = styled.footer`
  gap: 5px;
  display: flex;
  justify-content: right;
  padding: 6px;
  padding-right: 10px;
  background-color: #e0f0fe;
  border-radius: 5px;
`;

const StButton = styled.button`
  padding: 6px 12px;

  background-color: #5fb1f9;

  border: none;
  border-radius: 5px;

  color: #f6f7fb;

  cursor: pointer;
`;
