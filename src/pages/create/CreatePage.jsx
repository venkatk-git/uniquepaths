import React from "react";
import styled from "styled-components";

function CreatePage() {
  const [m, setM] = React.useState("");
  const [n, setN] = React.useState("");

  const dimension = { m: Number(m), n: Number(n) };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dimension);
  };

  return (
    <div>
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
    </div>
  );
}

const Form = styled.form``;

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
