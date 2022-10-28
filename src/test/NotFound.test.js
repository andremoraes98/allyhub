import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from '../pages/not found/NotFound';

describe('Testa a página principal:', () => {
  beforeEach(() => {
    render(<NotFound />, { wrapper: BrowserRouter });
  });
  
  describe('componentes textuais:', () => {
    test('se a tag H2 foi renderizada;', () => {
      const headerTitle = screen.getByRole('heading', { level: 2 });
      expect(headerTitle).toBeInTheDocument();
    });
  
    test('se o conteúdo da tag H2 está correto;', () => {
      const headerTItle = screen.getByRole('heading', { level: 2 });
      expect(headerTItle).toHaveTextContent('Ops... A página que você procura não existe!');
    });
  });

  describe('imagem:', () => {
    test('checa se a imagem foi renderizada;', () => {
      const image = screen.getByRole('img');
      expect(image).toBeInTheDocument();
    });

    test('checa se o texto alt da imagem está correto;', () => {
      const image = screen.getByAltText('Braço de uma criança segurando o número 404');
      expect(image).toBeInTheDocument();
    });
  })

  describe('botão de redirecionamento:', () => {
    test('se o botão é renderizado na página;', () => {
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });
  
    test('se o conteúdo do botão está correto;', () => {
      const button = screen.getByRole('button');
      expect(button).toHaveTextContent("Home");
    });

    test('checa se o botão tem o atributo "type" igual a "submit";', () => {
      const submitButton = screen.getByRole('button');
      expect(submitButton).toHaveAttribute('type', 'button');
    });
  })
})
