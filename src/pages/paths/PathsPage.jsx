import React from "react";

import styled from "styled-components";
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

  return (
    <Wrapper>
      <Span>{`${m} x ${n}`}</Span>
      <Grid grid={grid} wayNumber={wayNumber} />
      <Button onClick={() => setWayNumber((prev) => (prev += 1))}>
        {wayNumber < uniqueWays ? "+" : "-"}
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Span = styled.span`
  font-weight: bold;
  font-style: italic;
`;

const Button = styled.div`
  padding: 24px;
  cursor: pointer;
`;

export default PathsPage;
