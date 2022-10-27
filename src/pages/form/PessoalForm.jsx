import React from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import CustomInput from '../../components/custom input/CustomInput';
import './PessoalForm.css';

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
      Number.isNaN(Number(cpf))
    ) {
      errors.cpf = 'Insira apenas números!';
    } else if (cpf.length !== 11) {
      errors.cpf = 'Insira 11 números!';
    }
    return errors;
  };

  return (
    <>
      <h2 className="text-center my-5">First, let us know you!</h2>
      <Formik
        initialValues={{
          name: '',
          email: '',
          cellphone: '',
          cpf: '',
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
                />

                <CustomInput
                  id="email"
                  label="Email"
                  type="email"
                  errors={errors}
                  handleChange={handleChange}
                  value={values}
                  touched={touched}
                />

                <CustomInput
                  id="cellphone"
                  label="Telefone (com DDD)"
                  type="text"
                  errors={errors}
                  handleChange={handleChange}
                  value={values}
                  touched={touched}
                />

                <CustomInput
                  id="cpf"
                  label="CPF"
                  type="text"
                  errors={errors}
                  handleChange={handleChange}
                  value={values}
                  touched={touched}
                />

                <div className="submit-button mx-auto my-3">
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
    </>
  );
}

export default PessoalForm;
