// Dependencies
import styled from "styled-components";

// Componenets
import AnimatedBox from "./AnimatedBox";

// Helpers & Contants
import { findUniquePaths } from "../../utils/helpers";

// eslint-disable-next-line react/prop-types
function Grid({ grid, wayNumber }) {
  function contains(x, y, way) {
    // eslint-disable-next-line react/prop-types
    const m = grid.length;
    // eslint-disable-next-line react/prop-types
    const n = grid[0].length;
    const paths = findUniquePaths(m, n);
    return paths[way].some(([px, py]) => px === x && py === y);
  }

  return (
    <GridWrapper>
      {
        // eslint-disable-next-line react/prop-types
        grid.map((el, rowIndex) => (
          <RowWrapper key={rowIndex}>
            {el.map((el, colIndex) => {
              return (
                <AnimatedBox
                  key={`${rowIndex}-${colIndex}`}
                  isRed={contains(rowIndex, colIndex, wayNumber)}
                />
              );
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

export default Grid;
