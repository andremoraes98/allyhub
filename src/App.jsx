import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import PessoalForm from './pages/form/PessoalForm';
import Location from './pages/location/Location';
import Main from './pages/main/Main';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/forms" element={<PessoalForm />} />
        <Route exact path="/location" element={<Location />} />
        <Route exact path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
