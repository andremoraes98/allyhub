import ReactDOM from 'react-dom/client';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import PersonalForm from '../pages/form/PessoalForm';

let container;

describe('Testa a página PersonalForm:', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <PersonalForm />
      </BrowserRouter>
    );
  });

  test('checa se há um título na página;', () => {
    const headerTitle = screen.getByRole('heading', { level: 2 });
    expect(headerTitle).toBeInTheDocument();
  });

  test('checa se o conteúdo do título é o esperado;', () => {
    const headerTItle = screen.getByRole('heading', { level: 2 });
    expect(headerTItle).toHaveTextContent('First, let us know you!');
  });

  test('checa se todos os inputs foram renderizados;', () => {
    const inputs = screen.getAllByRole('textbox');
    expect(inputs.length).toBe(4);
  });

  test('checa se há um input com o label "Nome";', () => {
    const inputName = screen.getByLabelText('Nome');
    expect(inputName).toBeInTheDocument();
  });

  test('checa se há um input com o label "Email";', () => {
    const inputEmail = screen.getByLabelText('Email');
    expect(inputEmail).toBeInTheDocument();
  });

  test('checa se há um input com o label "Telefone (com DDD)";', () => {
    const inputCellphone = screen.getByLabelText('Telefone (com DDD)');
    expect(inputCellphone).toBeInTheDocument();
  });

  test('checa se há um input com o label "CPF";', () => {
    const inputCPF = screen.getByLabelText('CPF');
    expect(inputCPF).toBeInTheDocument();
  });

  test('checa se há um botão na página;', () => {
    const submitButton = screen.getByRole('button');
    expect(submitButton).toBeInTheDocument();
  });

  test('checa se o botão tem o atributo "type" igual a "submit";', () => {
    const submitButton = screen.getByRole('button');
    expect(submitButton).toHaveAttribute('type', 'submit');
  });
});