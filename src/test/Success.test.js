import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Success from '../pages/success/Success';

describe('Testa a página principal:', () => {
  beforeEach(() => {
    render(<Success />, { wrapper: BrowserRouter });
  });
  
  describe('componentes textuais:', () => {
    test('se a tag H2 foi renderizada;', () => {
      const headerTitle = screen.getByRole('heading', { level: 2 });
      expect(headerTitle).toBeInTheDocument();
    });
  
    test('se o conteúdo da tag H2 está correto;', () => {
      const headerTItle = screen.getByRole('heading', { level: 2 });
      expect(headerTItle).toHaveTextContent('Bem vindo ao time!');
    });
  
    test('se todas as tags "p" foram renderizadas corretamente.', () => {
      let paragraphElement = screen.getByText('Está pronto para mudar o rumo da sua educação?');
      expect(paragraphElement).toBeInTheDocument();

      paragraphElement = screen.getByText('Em instantes, você receberá um email com os próximos passos a serem tomados.');
      expect(paragraphElement).toBeInTheDocument();
    });
  });

  describe('imagem:', () => {
    test('checa se a imagem foi renderizada;', () => {
      const image = screen.getByRole('img');
      expect(image).toBeInTheDocument();
    });

    test('checa se o texto alt da imagem está correto;', () => {
      const image = screen.getByAltText('Câmera com algumas fotos em cima de um mapa');
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
