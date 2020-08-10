import React, { InputHTMLAttributes } from "react";
import { Container } from "./styles";

interface Inputprops extends InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<Inputprops> = (props) => {
  return (
    <Container>
      <input type="text" {...props} />
    </Container>
  );
};

export default Input;
