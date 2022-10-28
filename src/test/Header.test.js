import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/header/Header';

describe('Testa o componente Header:', () => {
  beforeEach(() => {
    render(<Header />, { wrapper: BrowserRouter });
  });

  test('se a imagem foi renderizada;', () => {
    const imgHeader = screen.getByAltText('Ally Logo');
    expect(imgHeader).toBeInTheDocument();
  });

  test('se o título foi renderizado;', () => {
    const headerTItle = screen.getByRole('heading', { level: 1 });
    expect(headerTItle).toBeInTheDocument();
  });

  test('se o título está correto;', () => {
    const headerTItle = screen.getByRole('heading', { level: 1 });
    expect(headerTItle).toHaveTextContent("With Ally it's easier");
  });
});
