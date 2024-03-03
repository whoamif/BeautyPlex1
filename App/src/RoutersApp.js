import React from "react";
import { Route, Routes, BrowserRouter, Router } from "react-router-dom";
import FormPage from "./Forme.js";
import Product from "./Product.js";

const RoutersApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Product />}></Route>
        <Route path="/:id" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutersApp;
