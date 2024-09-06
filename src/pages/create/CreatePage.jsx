import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// eslint-disable-next-line react/prop-types
function CreatePage({ m, n, setM, setN, dimension, setGrid }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setGrid(
      // eslint-disable-next-line react/prop-types
      Array.from({ length: dimension.m }, () => new Array(dimension.n).fill(0))
    );

    navigate("/paths");
  };

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
    </Wrapper>
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

export default CreatePage;
