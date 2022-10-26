import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Main from '../pages/main/Main';

describe('Testa a página principal:', () => {
  beforeEach(() => {
    render(<Main />, { wrapper: BrowserRouter });
  });
  
  describe('componentes textuais:', () => {
    test('se a tag H2 foi renderizada;', () => {
      const headerTitle = screen.getByRole('heading', { level: 2 });
      expect(headerTitle).toBeInTheDocument();
    });
  
    test('se o conteúdo da tag H2 está correto;', () => {
      const headerTItle = screen.getByRole('heading', { level: 2 });
      expect(headerTItle).toHaveTextContent('We are a tech provider for the International Education Industry!');
    });
  
    test('se a tag p foi renderizada corretamente.', () => {
      const paragraphElement = screen.getByText('Do you wanna get envolved?');
      expect(paragraphElement).toBeInTheDocument();
    });
  });

  describe('botão de redirecionamento:', () => {
    test('se o botão é renderizado na página;', () => {
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });
  
    test('se o conteúdo do botão está correto;', () => {
      const button = screen.getByRole('button');
      expect(button).toHaveTextContent("Let's do it together!");
    });
  })
})
