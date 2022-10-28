import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import image from '../../images/not_found_error.png';
import './NotFound.css';

function NotFound() {
  const navigate = useNavigate();
  return (
    <main className="text-center main-error">
      <h2 className="m-5">Ops... A página que você procura não existe!</h2>
      <div className="error-image mx-3">
        <img
          src={image}
          alt="Braço de uma criança segurando o número 404"
        />
      </div>
      <div className="main-button text-center mx-auto py-4">
        <Button
          variant="outline-primary"
          type="button"
          onClick={() => navigate('/')}
        >
          Home
        </Button>
      </div>
    </main>
  );
}

export default NotFound;
