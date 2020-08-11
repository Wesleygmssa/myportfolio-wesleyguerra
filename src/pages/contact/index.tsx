import React from "react";
import PageDefault from "../../components/PageDefault";
import { Form } from "./styles";
import { FiLogIn } from "react-icons/fi";
import Input from "../../components/Input";

const Contact: React.FC = () => {
  return (
    <>
      <PageDefault>
        <Form>
          <h1>Entre em contato:</h1>
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="E-mail" />
          <textarea placeholder="Digite o texto"></textarea>
          <button type="submit">
            <FiLogIn />
            Enviar
          </button>
        </Form>
      </PageDefault>
    </>
  );
};

export default Contact;
