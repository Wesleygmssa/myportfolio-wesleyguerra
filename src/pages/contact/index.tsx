//components default react
import React, { useCallback, useRef } from "react";

//icons e styles
import { Content, Container } from "./styles";
import { FiLogIn, FiMail, FiUser, FiArrowLeft } from "react-icons/fi";

// components default
import Input from "../../components/Input";
import Footer from "../../components/Footer";
import Textarea from "../../components/Textarea";

// dependencias
import { Form } from "@unform/web";
import { Link } from "react-router-dom";
import * as Yup from "yup"; // all validation

//tipagem
import { FormHandles } from "@unform/core";

const Contact: React.FC = () => {
  // direct access to the form
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required("Nome obrigatório"),
        email: Yup.string()
          .required("Email obrigatório")
          .email("Digite um e-mail válido"),
        textarea: Yup.string().required("Texto obrigatório"),
      });

      //validation return all err
      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      console.log(err);

      formRef.current?.setErrors({
        name: "Nome obrigatório",
      });
    }
  }, []);

  return (
    <>
      <Container>
        <Link to="/">
          <FiArrowLeft size={20} className="link" /> Voltar para home
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
