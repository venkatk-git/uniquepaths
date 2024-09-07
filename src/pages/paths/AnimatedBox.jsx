import styled from "styled-components";

// eslint-disable-next-line react/prop-types
function Box({ isRed }) {
  return <Wrapper isRed={isRed} />;
}

const Wrapper = styled.div`
  width: fit-content;
  padding: 24px;
  border: 1px solid #acacac;
  background-color: ${({ isRed }) => (isRed ? "red" : "#3b3b3b")};
  transition: background-color 0.5s ease-in-out;
`;

export default Box;
