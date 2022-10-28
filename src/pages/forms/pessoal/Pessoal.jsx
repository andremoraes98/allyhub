import React from 'react';
import { Button } from 'react-bootstrap';
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import { cpf } from 'cpf-cnpj-validator';
import CustomInput from '../../../components/custom input/CustomInput';
import './Pessoal.css';

function PessoalForm() {
  const navigate = useNavigate();

  const validateForms = ({
    name, email, cellphone, cpfInput,
  }) => {
    const errors = {};
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const onlyNumbersRegex = /^[0-9]+$/;

    if (!name) {
      errors.name = 'Nome é obrigatório!';
    } if (!email) {
      errors.email = 'Email é obrigatório!';
    } else if (!emailRegex.test(email)) {
      errors.email = 'Insira um email válido!';
    } if (!cellphone) {
      errors.cellphone = 'Telefone é obrigatório!';
    } else if (!onlyNumbersRegex.test(cellphone)) {
      errors.cellphone = 'Insira apenas números!';
    } else if (cellphone.length < 10) {
      errors.cellphone = 'Insira, no mínimo, 10 números';
    } if (!cpfInput) {
      errors.cpfInput = 'CPF é obrigatório!';
    } else if (!onlyNumbersRegex.test(cpfInput)) {
      errors.cpfInput = 'Insira apenas números!';
    } else if (cpfInput.length !== 11) {
      errors.cpfInput = 'Insira 11 números!';
    } else if (!cpf.isValid(cpfInput)) {
      errors.cpfInput = 'CPF inválido!';
    }
    return errors;
  };

  return (
    <>
      <h2 className="text-center my-5 mx-3">Primeiramente, deixe a gente te conhecer melhor!</h2>
      <Formik
        initialValues={{
          name: '',
          email: '',
          cellphone: '',
          cpfInput: '',
        }}
        validate={validateForms}
        onSubmit={() => navigate('/location')}
      >
        {
            ({
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
              submitCount,
            }) => (
              <Form
                noValidate
                onSubmit={handleSubmit}
                className="mx-auto"
              >
                <CustomInput
                  id="name"
                  label="Nome"
                  type="text"
                  errors={errors}
                  handleChange={handleChange}
                  value={values}
                  touched={touched}
                  submitCount={submitCount}
                />

                <CustomInput
                  id="email"
                  label="Email"
                  type="email"
                  errors={errors}
                  handleChange={handleChange}
                  value={values}
                  touched={touched}
                  submitCount={submitCount}
                />

                <CustomInput
                  id="cellphone"
                  label="Telefone (com DDD)"
                  type="tel"
                  errors={errors}
                  handleChange={handleChange}
                  value={values}
                  touched={touched}
                  submitCount={submitCount}
                />

                <CustomInput
                  id="cpfInput"
                  label="CPF"
                  type="text"
                  errors={errors}
                  handleChange={handleChange}
                  value={values}
                  touched={touched}
                  submitCount={submitCount}
                />

                <div className="blue-button mx-auto my-3">
                  <Button
                    variant="outline-primary"
                    type="submit"
                  >
                    Escolher um destino!
                  </Button>
                </div>
              </Form>
            )
          }
      </Formik>
    </>
  );
}

export default PessoalForm;
