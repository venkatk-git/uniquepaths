import React from "react";

import styled, { css } from "styled-components";
import Grid from "./Grid";
import { findUniquePaths } from "../../utils/helpers";

// eslint-disable-next-line react/prop-types
function PathsPage({ grid }) {
  // eslint-disable-next-line react/prop-types
  const m = grid.length;
  // eslint-disable-next-line react/prop-types
  const n = grid[0].length;

  const uniqueWays = findUniquePaths(m, n).length;

  const [wayNumber, setWayNumber] = React.useState(0);

  const handleNextWay = () => {
    setWayNumber((prev) => {
      if (prev == uniqueWays - 1) return prev;

      return (prev += 1);
    });
  };

  const handlePrevWay = () => {
    setWayNumber((prev) => {
      if (prev == 0) return prev;

      return (prev -= 1);
    });
  };

  return (
    <Wrapper>
      <Span>{`${m} x ${n}`}</Span>
      <GridWrapper>
        <Grid grid={grid} wayNumber={wayNumber} />
        <ButtonWrapper>
          <Button
            onClick={handleNextWay}
            disabledbutton={wayNumber === uniqueWays - 1}
          >
            {"👉"}
          </Button>
          <Button onClick={handlePrevWay} disabledbutton={wayNumber === 0}>
            {"👈"}
          </Button>
        </ButtonWrapper>
      </GridWrapper>
      <Span>
        There are <b>{uniqueWays}</b> unique ways in{" "}
        <b>
          {m} x {n}
        </b>{" "}
        board
      </Span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
`;

const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
`;

const Span = styled.span`
  ${"" /* font-weight: bold; */}
  font-style: italic;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const DisabledButton = css`
  opacity: 0;
  cursor: default;

  &:hover {
    border-color: transparent;
  }
`;

const Button = styled.div`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;

  &:hover {
    border-color: #646cff;
  }

  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  ${({ disabledbutton }) => disabledbutton && DisabledButton}
`;

export default PathsPage;
