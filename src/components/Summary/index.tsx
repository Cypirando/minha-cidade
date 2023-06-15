import React, { useState } from "react";
import { Form, Input, Button, Table, message } from "antd";
import { Wrapper } from "./styles";
import ButtonLink from "../ButtonLink";

interface FormValues {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
}

const Summary = () => {
  const [formData, setFormData] = useState<FormValues | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onFinish = (values: FormValues) => {
    setFormData(values);
    setIsSubmitted(true);
    message.success("Mensagem enviada com sucesso!");
  };

  const columns = [
    {
      title: "Campo",
      dataIndex: "field",
      key: "field",
    },
    {
      title: "Valor",
      dataIndex: "value",
      key: "value",
    },
  ];

  const data = formData
    ? [
        {
          key: "1",
          field: "Nome",
          value: formData.nome,
        },
        {
          key: "2",
          field: "E-mail",
          value: formData.email,
        },
        {
          key: "3",
          field: "Assunto",
          value: formData.assunto,
        },
        {
          key: "4",
          field: "Mensagem",
          value: formData.mensagem,
        },
      ]
    : [];

  return (
    <>
      <Wrapper>
        <h2>Para saber mais sobre Florianópolis, deixe sua mensagem aqui:</h2>
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
            rules={[
              { required: true, message: "Por favor, insira a mensagem" },
            ]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Enviar
            </Button>
          </Form.Item>
        </Form>
        {isSubmitted && (
          <>
            <Table
              columns={columns}
              dataSource={data}
              pagination={false}
              bordered
            />
          </>
        )}
        <ButtonLink to="/">Voltar</ButtonLink>
      </Wrapper>
    </>
  );
};

export default Summary;