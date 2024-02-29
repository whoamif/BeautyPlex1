import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import FormPage from './Forme.js';
import Product from './Product.js';

const RoutersApp = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/forme/:id" element={<FormPage />} />
        <Route path='/' element={<Product />}></Route>
        
      </Routes>
    </BrowserRouter>
  );
};

export default RoutersApp;
