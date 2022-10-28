import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Pessoal from './pages/forms/pessoal/Pessoal';
import Location from './pages/forms/location/Location';
import Main from './pages/main/Main';
import Success from './pages/success/Success';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/pessoal" element={<Pessoal />} />
        <Route exact path="/location" element={<Location />} />
        <Route exact path="/success" element={<Success />} />
        <Route exact path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
