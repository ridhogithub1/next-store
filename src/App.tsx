import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import OrderPage from './order';
import { Product, staticProducts } from './produk';

function HomePage() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredProducts = staticProducts.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleProductClick = (product: Product) => {
    // Navigasi ke route dengan ID produk
    navigate(`/order/${product.id}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Next Store Collection</h1>
        <input
          type="text"
          placeholder="🔍 Cari produk impian Anda..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <div className="product-list">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => handleProductClick(product)}
            >
              <img src={product.images[0]} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Rp {product.price.toLocaleString('id-ID')}</p>
            </div>
          ))}
          {filteredProducts.length === 0 && (
            <div style={{ 
              gridColumn: '1 / -1', 
              padding: '60px 20px',
              color: '#94a3b8',
              fontSize: '18px'
            }}>
              <p>🔍 Tidak ada produk yang ditemukan.</p>
              <p style={{ fontSize: '14px', marginTop: '8px', opacity: 0.7 }}>
                Coba kata kunci yang berbeda
              </p>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Route dengan parameter ID produk */}
        <Route path="/order/:productId" element={<OrderPage />} />
        {/* Fallback route untuk backward compatibility */}
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </Router>
  );
}

export default App;