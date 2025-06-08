import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./landing-page/home/HomePage";
import Signup from "./landing-page/signup/Signup";
import ProductsPage from "./landing-page/products/ProductsPage";
import AboutPage from "./landing-page/about/AboutPage";
import PricingPage from "./landing-page/pricing/PricingPage";
import SupportPage from "./landing-page/support/SupportPage";
import Navbar from './landing-page/Navbar';
import Footer from './landing-page/Footer';
import NotFound from './landing-page/NotFound';

function App() {
  return ( 
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
