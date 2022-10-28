import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import image from '../../images/travel.jpg';
import './Success.css';

function Success() {
  const navigate = useNavigate();
  return (
    <>
      <main className="main-success mt-3 text-center d-flex align-items-center flex-wrap justify-content-around">
        <section className="mx-1">
          <h2 className="my-5">Bem vindo ao time!</h2>
          <p>Está pronto para mudar o rumo da sua educação?</p>
          <p>Em instantes, você receberá um email com os próximos passos a serem tomados.</p>
        </section>
        <div className="travel-image mx-3">
          <img
            src={image}
            alt="Câmera com algumas fotos em cima de um mapa"
          />
        </div>
      </main>
      <div className="main-button text-center mx-auto py-4">
        <Button
          variant="outline-primary"
          type="button"
          onClick={() => navigate('/')}
        >
          Home
        </Button>
      </div>
    </>
  );
}

export default Success;
