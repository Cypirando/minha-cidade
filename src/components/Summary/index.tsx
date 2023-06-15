import React from "react";
import { Form, Input, Button } from "antd";
import { Wrapper } from "./styles";
import { Link } from "react-router-dom";
import ButtonLink from "../ButtonLink";

interface FormValues {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
}

const Summary = () => {
  const onFinish = (values: FormValues) => {
    console.log("Valores do formulário:", values);
  };

  return (
    <Wrapper>
      <Form onFinish={onFinish}>
        <Form.Item
          label="Nome"
          name="nome"
          rules={[{ required: true, message: "Por favor, insira seu nome" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="E-mail"
          name="email"
          rules={[
            {
              required: true,
              message: "Por favor, insira seu endereço de e-mail",
            },
            { type: "email", message: "Por favor, insira um e-mail válido" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Assunto"
          name="assunto"
          rules={[{ required: true, message: "Por favor, insira o assunto" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mensagem"
          name="mensagem"
          rules={[{ required: true, message: "Por favor, insira a mensagem" }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Enviar
          </Button>
        </Form.Item>
      </Form>
      <ButtonLink to="/">Voltar</ButtonLink>
    </Wrapper>
  );
};

export default Summary;
