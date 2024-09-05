import React from "react";
import styled from "styled-components";
import Box from "./Box";

function CreatePage() {
  const [m, setM] = React.useState("");
  const [n, setN] = React.useState("");
  const [grid, setGrid] = React.useState([]);
  const [show, setShow] = React.useState(false);

  const dimension = { m: Number(m), n: Number(n) };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGrid(
      Array.from({ length: dimension.m }, () => new Array(dimension.n).fill(0))
    );
  };

  React.useEffect(() => {
    setShow(true);
  }, [grid]);

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <Input
            placeholder="m"
            type="number"
            value={m}
            onChange={(e) => setM(e.target.value)}
          ></Input>
          <Span>x</Span>
          <Input
            placeholder="n"
            type="number"
            value={n}
            onChange={(e) => setN(e.target.value)}
          ></Input>
        </InputWrapper>
        <Button>Find Paths</Button>
      </Form>

      {show && <Grid grid={grid} />}
    </Wrapper>
  );
}

// eslint-disable-next-line react/prop-types
function Grid({ grid }) {
  return (
    <div>
      {
        // eslint-disable-next-line react/prop-types
        grid.map((el) => (
          <RowWrapper key={el}>
            {el.map((index) => (
              <Box key={index} />
            ))}
          </RowWrapper>
        ))
      }
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  margin: 32px;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 26px;
  margin: 26px;
  align-items: center;
`;

const Span = styled.span`
  font-size: 20px;
`;

const Input = styled.input`
  padding: 12px 18px;
`;

const Button = styled.button`
  display: block;
  margin: auto;
`;

const RowWrapper = styled.div`
  display: flex;
`;

export default CreatePage;
