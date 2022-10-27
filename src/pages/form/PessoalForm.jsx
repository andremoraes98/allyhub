import React from 'react';
import { Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

function PessoalForm() {
  const navigate = useNavigate();

  const validateForms = ({
    name, email, cellphone, cpf,
  }) => {
    const errors = {};
    if (!name) {
      errors.name = 'Nome é obrigatório!';
    } else if (!email) {
      errors.email = 'Email é obrigatório!';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
    ) {
      errors.email = 'Insira um email válido!';
    } else if (!cellphone) {
      errors.cellphone = 'Telefone é obrigatório!';
    } else if (Number.isNaN(Number(cellphone))) {
      errors.cellphone = 'Insira apenas números!';
    } else if (cellphone.length < 10) {
      errors.cellphone = 'Insira, no mínimo, 10 números';
    } else if (!cpf) {
      errors.cpf = 'CPF é obrigatório!';
    } else if (
      !/^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/.test(cpf)
    ) {
      errors.cpf = 'Insira um CPF válido!';
    }
    return errors;
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        cellphone: '',
        cpf: '',
      }}
      validate={validateForms}
      onSubmit={() => navigate('/success')}
    >
      {
          ({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <FloatingLabel className="my-3 mx-5" controlId="name" label="Name">
                <Form.Control
                  type="text"
                  placeholder="Name"
                  onChange={handleChange}
                  value={values.name}
                  isValid={touched.name && !errors.name}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </FloatingLabel>

              <FloatingLabel className="my-3 mx-5" controlId="email" label="Email">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={values.email}
                  isValid={touched.email && !errors.email}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </FloatingLabel>

              <FloatingLabel className="my-3 mx-5" controlId="cellphone" label="Telefone (com DDD)">
                <Form.Control
                  type="text"
                  placeholder="Telefone (com DDD)"
                  onChange={handleChange}
                  value={values.cellphone}
                  isValid={touched.cellphone && !errors.cellphone}
                  isInvalid={!!errors.cellphone}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.cellphone}
                </Form.Control.Feedback>
              </FloatingLabel>

              <FloatingLabel className="my-3 mx-5" controlId="cpf" label="CPF (apenas números)">
                <Form.Control
                  type="text"
                  placeholder="CPF (apenas números)"
                  onChange={handleChange}
                  value={values.cpf}
                  isValid={touched.cpf && !errors.cpf}
                  isInvalid={!!errors.cpf}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.cpf}
                </Form.Control.Feedback>
              </FloatingLabel>

              <div className="text-center">
                <Button
                  variant="outline-primary"
                  type="submit"
                >
                  Enviar
                </Button>
              </div>
            </Form>
          )
        }
    </Formik>
  );
}

export default PessoalForm;
