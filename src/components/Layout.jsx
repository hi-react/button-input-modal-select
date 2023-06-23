import React from "react";
import { styled } from "styled-components";

function Layout(props) {
  return (
    <>
      <StTitle>React 개인과제 Level 3</StTitle>
      <StSection>{props.children}</StSection>
    </>
  );
}

export default Layout;

// styled-components
const StTitle = styled.div`
  max-width: 1200px;
  min-width: 800px;

  margin: 30px auto;
  padding: 25px;

  /* border: 3px solid #1976e0; */
  border-bottom: 3px solid black;

  font-size: 28px;
  font-weight: 800;
  text-align: center;
`;

const StSection = styled.section`
  max-width: 1200px;
  min-width: 800px;

  margin: 20px auto;
  padding: 10px;

  /* background-color: #34ebde; */
`;
