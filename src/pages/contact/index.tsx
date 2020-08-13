import React, { useCallback, useRef } from "react";
import { Content, Container } from "./styles";
import { FiLogIn, FiMail, FiUser, FiArrowLeft } from "react-icons/fi";
import Input from "../../components/Input";
import { Form } from "@unform/web";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const Contact: React.FC = () => {
  const formRef = useRef(null);

  console.log(formRef);
  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required("Nome obrigatório"),
        email: Yup.string().email("Digite um e-mail válido"),
        // text: Yup.string().required(),
      });

      await schema.validate(data, {
        //validation
        abortEarly: false,
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Container>
      <Link to="/">
        <FiArrowLeft size={20} /> Voltar para home
      </Link>
      <Content>
        <h1>Entre em contato:</h1>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
          <Input name="email" icon={FiMail} type="email" placeholder="E-mail" />
          <textarea name="text" placeholder="Digite o texto" />

          <button type="submit">
            <FiLogIn />
            Enviar
          </button>
        </Form>
      </Content>
    </Container>
  );
};
export default Contact;
