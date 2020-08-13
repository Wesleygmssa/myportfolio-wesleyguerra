import React, { useCallback, useRef, useState } from "react";
import { Content, Container } from "./styles";
import {
  FiLogIn,
  FiMail,
  FiUser,
  FiArrowLeft,
  FiFileText,
} from "react-icons/fi";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import { Form } from "@unform/web";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { FormHandles } from "@unform/core";
import Zap from "../../components/Zap";
import Footer from "../../components/Footer";

const Contact: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required("Nome obrigatório"),
        email: Yup.string().required("Digite um e-mail válido"),
        textarea: Yup.string().required("Texto obrigatório"),
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
    <>
      <Container>
        <Link to="/">
          <FiArrowLeft size={20} /> Voltar para home
        </Link>
        <Content>
          <h1>Entre em contato:</h1>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
            <Input
              name="email"
              icon={FiMail}
              type="email"
              placeholder="E-mail"
            />
            <Textarea name="textarea" placeholder="Digite o texto" />

            <button type="submit">
              <FiLogIn />
              Enviar
            </button>
          </Form>
        </Content>
        <Footer />
      </Container>
    </>
  );
};
export default Contact;
