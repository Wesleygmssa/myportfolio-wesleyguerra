import React from "react";
import PageDefault from "../../components/PageDefault";
import { Container } from "./styles";
import { FiLogIn, FiMail, FiUser } from "react-icons/fi";
import Input from "../../components/Input";
import { Form } from "@unform/web";

const Contact: React.FC = () => {
  return (
    <>
      <PageDefault>
        <Container>
          <Form onSubmit={() => {}}>
            <h1>Entre em contato:</h1>
            <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
            <Input
              name="email"
              icon={FiMail}
              type="email"
              placeholder="E-mail"
            />
            <textarea placeholder="Digite o texto"></textarea>
            <button type="submit">
              <FiLogIn />
              Enviar
            </button>
          </Form>
        </Container>
      </PageDefault>
    </>
  );
};

export default Contact;
