import { styled } from "styled-components";

function Select() {
  const options = [
    { value: "react", name: "리액트" },
    { value: "java", name: "자바" },
    { value: "spring", name: "스프링" },
  ];

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <StContainer>
      <StH1>Select</StH1>

      <StSelect onChange={handleChange} defaultValue="apple">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </StSelect>
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

const StSelect = styled.select`
  width: 30%;
  padding: 8px;
  font-size: 14px;

  border: 2px solid #4fc0e8;
  border-radius: 5px;
  background-color: transparent;
  &:focus {
    border-color: #1976e0;
  }
  appearance: none;
`;
