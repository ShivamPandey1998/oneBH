// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import statement
import Header from './Headers';
import Hero from './Hero';
import ProductListing from './ProductListing';
import ProductDetail from './ProductDetail';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Hero />
        <Routes> {/* Updated to Routes */}
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
