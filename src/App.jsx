import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './pages/main/Main';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
