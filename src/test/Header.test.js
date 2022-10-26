import { render, screen } from '@testing-library/react';
import Header from '../components/header/Header';

describe('Testa o componente Header', () => {
  test('se a imagem foi renderizada;', () => {
    render(<Header />);
    const imgHeader = screen.getByAltText('Ally Logo');
    expect(imgHeader).toBeInTheDocument();
  });

  test('se o título foi renderizado;', () => {
    render(<Header />);
    const headerTItle = screen.getByRole('heading', { level: 1 });
    expect(headerTItle).toBeInTheDocument();
  });

  test('se o título está correto;', () => {
    render(<Header />);
    const headerTItle = screen.getByRole('heading', { level: 1 });
    expect(headerTItle).toHaveTextContent("With Ally it's easier");
  })
});
