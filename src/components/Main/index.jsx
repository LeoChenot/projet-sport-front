import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// import PropTypes from 'prop-types';
import './style.scss';

function Main() {
  return (
    <main className="main">
      main
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element="Accueil" />
      </Routes>
    </main>
  );
}

Main.propTypes = {

};

export default Main;
