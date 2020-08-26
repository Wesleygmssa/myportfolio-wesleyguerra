//components default react
import React, { useCallback, useRef } from "react";

//icons e styles
import { Content, Container } from "./styles";
import { FiLogIn, FiMail, FiUser, FiArrowLeft, FiHome } from "react-icons/fi";

// components default
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";

import { useToast } from "../../hook/ToastContext";

// dependencias
import { Form } from "@unform/web";
import { Link, useHistory } from "react-router-dom";
import * as Yup from "yup"; // all validation
// import api from '../../services/api';
import axios from "axios";

//functions utils
import getValidationErros from "../../utils/getValidationErros";

//tipagem interface
import { FormHandles } from "@unform/core";
import styled, { keyframes } from "styled-components";

const Contact: React.FC = () => {
  const history = useHistory();
  // direct access to the form
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  // animation
  const apperFromCenter = keyframes`
 from{
   opacity: 0;
   transform: translateX(10px);
 }
 to{
   opacity: 1;
   transform: translateX(-10px);
 }
`;

  const AnimationContainer = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 60px;
    /* animation: ${apperFromCenter} 0.9s;3 */
  `;

  const handleSubmit = useCallback(
    async (data: object) => {
      //validation
      try {
        formRef.current?.setErrors({}); // pegando redferncia do form

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

        await axios.post("http://localhost:3333/register", data);

        addToast({
          type: "success",
          title: "Mensagem foi enviada com sucesso!",
          description: "Logo retornarei a mensagem",
        });

        history.push("/");
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErros(err);
          //get name e insert o error
          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: "error",
          title: "Mensagem não foi enviada",
          description:
            "O servidor encontrou um erro. Tente novamente mais tarde ...",
        });
      }
    },
    [Contact, addToast]
  );

  return (
    <>
      <Container>
        <AnimationContainer>
          <Content>
            <Link className="link" to="/">
              <FiArrowLeft size={20} /> Voltar
            </Link>
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
        </AnimationContainer>
      </Container>
    </>
  );
};
export default Contact;
