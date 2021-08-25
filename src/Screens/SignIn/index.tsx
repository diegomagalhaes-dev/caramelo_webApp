import React, { useCallback, useRef, useContext } from "react";
import * as Yup from "yup";
import { FiMail, FiLock } from "react-icons/fi";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";

import { Container, Content, Background } from "./styles";
import Input from "../../Components/Input/index";
import logoImg from "../../Images/logo.svg";
import getValidationErrors from "../../Utils/getValidationErrors";
import { useAuth } from "../../context/AuthContext";

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string().required().email("Digite um email válido"),
          password: Yup.string().required(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [signIn]
  );

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu login</h1>
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            placeholder="password"
            type="password"
          />
          <button type="submit">Entrar</button>
        </Form>
      </Content>
      <Background>
        <img src={logoImg} alt="Caramelo" />
      </Background>
    </Container>
  );
};

export default SignIn;
