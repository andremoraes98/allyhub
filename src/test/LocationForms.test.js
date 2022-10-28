import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LocationProvider from '../context/LocationProvider';
import Location from '../pages/forms/location/Location';

describe('Testa a página PersonalForm:', () => {
  beforeEach(() => {
  
    render(
      <LocationProvider>
        <BrowserRouter>
          <Location />
        </BrowserRouter>
      </LocationProvider>
    );
  });

  test('checa se há um título na página;', () => {
    const headerTitle = screen.getByRole('heading', { level: 2 });
    expect(headerTitle).toBeInTheDocument();
  });

  test('checa se o conteúdo do título é o esperado;', () => {
    const headerTItle = screen.getByRole('heading', { level: 2 });
    expect(headerTItle).toHaveTextContent('Onde você queria fazer um intercâmbio?');
  });

  test('checa se há um select para selecionar o país;', () => {
    const countrySelect = screen.getByLabelText('Escolha um País!');
    expect(countrySelect).toBeInTheDocument();
  });

  test('checa se há um select para selecionar a cidade;', () => {
    const citySelect = screen.getByLabelText('Escolha uma Cidade!');
    expect(citySelect).toBeInTheDocument();
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