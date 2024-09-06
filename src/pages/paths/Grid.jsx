import styled from "styled-components";

import Box from "./Box";
import { findUniquePaths } from "../../utils/helpers";

// eslint-disable-next-line react/prop-types
function Grid({ grid, wayNumber }) {
  function contains(x, y, way) {
    const m = grid.length;
    const n = grid[0].length;
    const paths = findUniquePaths(m, n);
    return paths[way].some(([px, py]) => px === x && py === y);
  }

  return (
    <div>
      {
        // eslint-disable-next-line react/prop-types
        grid.map((el, rowIndex) => (
          <RowWrapper key={rowIndex}>
            {el.map((el, colIndex) => {
              if (contains(rowIndex, colIndex, wayNumber)) {
                return <RedBox key={`${rowIndex}-${colIndex}`} />;
              }
              return <Box key={`${rowIndex}-${colIndex}`} />;
            })}
          </RowWrapper>
        ))
      }
    </div>
  );
}

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
