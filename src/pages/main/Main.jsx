import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './Main.css';

function Main() {
  const navigate = useNavigate();

  return (
    <section className="my-5">
      <h2 className="text-center m-0 mx-4 py-5">
        We are a tech provider for the International Education Industry!
      </h2>

      <p className="text-center m-0 mx-4">
        Do you wanna get envolved?
      </p>

      <div className="main-button text-center mx-auto py-4">
        <Button
          variant="outline-primary"
          onClick={() => navigate('/pessoal')}
        >
          Let&apos;s do it together!
        </Button>
      </div>
    </section>
  );
}

export default Main;
