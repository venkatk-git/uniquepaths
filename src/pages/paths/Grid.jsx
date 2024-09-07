// Dependencies
import styled from "styled-components";
import React from "react";

// Componenets
import Box from "./Box";

// Helpers & Contants
import { findUniquePaths } from "../../utils/helpers";

// eslint-disable-next-line react/prop-types
function Grid({ grid, wayNumber }) {
  const gridElement = React.useRef(null);

  React.useLayoutEffect(() => {
    if (!gridElement.current) return;

    const gridRows = gridElement.current.children;

    Array.from(gridRows).forEach((row, rowIndex) => {
      const rowBoxes = row.children;

      Array.from(rowBoxes).forEach((box, colIndex) => {
        if (contains(rowIndex, colIndex, wayNumber)) {
          const redBox = <RedBox key={`${rowIndex}-${colIndex}-path`} />;
        }
      });
    });
  });
  function contains(x, y, way) {
    // eslint-disable-next-line react/prop-types
    const m = grid.length;
    // eslint-disable-next-line react/prop-types
    const n = grid[0].length;
    const paths = findUniquePaths(m, n);
    return paths[way].some(([px, py]) => px === x && py === y);
  }

  return (
    <GridWrapper ref={gridElement}>
      {
        // eslint-disable-next-line react/prop-types
        grid.map((el, rowIndex) => (
          <RowWrapper key={rowIndex}>
            {el.map((el, colIndex) => {
              return <Box key={`${rowIndex}-${colIndex}`} />;
            })}
          </RowWrapper>
        ))
      }
    </GridWrapper>
  );
}

const GridWrapper = styled.div``;

const RowWrapper = styled.div`
  display: flex;
`;

const RedBox = styled.div`
  width: fit-content;
  padding: 24px;
  border: 1px solid #acacac;
  background-color: red;
`;

export default Grid;
