// import React, { useState } from 'react';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
// import OrderPage from './order';
// import { Product, staticProducts } from './produk';

// function HomePage() {
//   const [search, setSearch] = useState("");
//   const navigate = useNavigate();

//   const filteredProducts = staticProducts.filter(product =>
//     product.name.toLowerCase().includes(search.toLowerCase())
//   );

//   const handleProductClick = (product: Product) => {
//     // Navigasi ke route dengan ID produk
//     navigate(`/order/${product.id}`);
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Next Store Collection</h1>
//         <input
//           type="text"
//           placeholder="🔍 Cari produk impian Anda..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="search-input"
//         />
//         <div className="product-list">
//           {filteredProducts.map((product) => (
//             <div
//               key={product.id}
//               className="product-card"
//               onClick={() => handleProductClick(product)}
//             >
//               <img src={product.images[0]} alt={product.name} />
//               <h3>{product.name}</h3>
//               <p>Rp {product.price.toLocaleString('id-ID')}</p>
//             </div>
//           ))}
//           {filteredProducts.length === 0 && (
//             <div style={{ 
//               gridColumn: '1 / -1', 
//               padding: '60px 20px',
//               color: '#94a3b8',
//               fontSize: '18px'
//             }}>
//               <p>🔍 Tidak ada produk yang ditemukan.</p>
//               <p style={{ fontSize: '14px', marginTop: '8px', opacity: 0.7 }}>
//                 Coba kata kunci yang berbeda
//               </p>
//             </div>
//           )}
//         </div>
//       </header>
//     </div>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         {/* Route dengan parameter ID produk */}
//         <Route path="/order/:productId" element={<OrderPage />} />
//         {/* Fallback route untuk backward compatibility */}
//         <Route path="/order" element={<OrderPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
// import OrderPage from './order';
// import OrderSuccessPage from './ordersuccess';
// import { Product, staticProducts } from './produk';

// function HomePage() {
//   const [search, setSearch] = useState("");
//   const navigate = useNavigate();

//   const filteredProducts = staticProducts.filter(product =>
//     product.name.toLowerCase().includes(search.toLowerCase())
//   );

//   const handleProductClick = (product: Product) => {
//     // Navigasi ke route dengan ID produk
//     navigate(`/order/${product.id}`);
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Next Store Collection</h1>
//         <input
//           type="text"
//           placeholder="🔍 Cari produk impian Anda..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="search-input"
//         />
//         <div className="product-list">
//           {filteredProducts.map((product) => (
//             <div
//               key={product.id}
//               className="product-card"
//               onClick={() => handleProductClick(product)}
//             >
//               <img src={product.images[0]} alt={product.name} />
//               <h3>{product.name}</h3>
//               <p>Rp {product.price.toLocaleString('id-ID')}</p>
//             </div>
//           ))}
//           {filteredProducts.length === 0 && (
//             <div style={{ 
//               gridColumn: '1 / -1', 
//               padding: '60px 20px',
//               color: '#94a3b8',
//               fontSize: '18px'
//             }}>
//               <p>🔍 Tidak ada produk yang ditemukan.</p>
//               <p style={{ fontSize: '14px', marginTop: '8px', opacity: 0.7 }}>
//                 Coba kata kunci yang berbeda
//               </p>
//             </div>
//           )}
//         </div>
//       </header>
//     </div>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         {/* Route dengan parameter ID produk */}
//         <Route path="/order/:productId" element={<OrderPage />} />
//         {/* Fallback route untuk backward compatibility */}
//         <Route path="/order" element={<OrderPage />} />
//         {/* Route untuk halaman order success */}
//         <Route path="/ordersuccess/:orderId" element={<OrderSuccessPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import OrderPage from './order';
import OrderSuccessPage from './ordersuccess';

type Product = {
  _id: string;
  name: string;
  price: number;
  description?: string;
  image: string;
};

function HomePage() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Fetch data dari API backend admin
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://admin-next-store-backend.vercel.app/api/admin/products');
        const data = await res.json();

        if (data.status === "success" && data.data) {
          setProducts(data.data);
        } else {
          setError("Gagal memuat data produk");
        }
      } catch (err) {
        console.error("❌ Error fetching products:", err);
        setError("Terjadi kesalahan saat mengambil data produk");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter produk berdasarkan input pencarian
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleProductClick = (product: Product) => {
    navigate(`/order/${product._id}`);
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

        {/* Loading state */}
        {loading && <p style={{ marginTop: 20 }}>⏳ Memuat produk...</p>}

        {/* Error state */}
        {error && <p style={{ color: 'red', marginTop: 20 }}>{error}</p>}

        {/* Produk List */}
        <div className="product-list">
          {!loading && filteredProducts.map((product) => (
            <div
              key={product._id}
              className="product-card"
              onClick={() => handleProductClick(product)}
            >
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Rp {product.price.toLocaleString('id-ID')}</p>
            </div>
          ))}

          {/* Tidak ada hasil */}
          {!loading && filteredProducts.length === 0 && (
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
        <Route path="/order/:productId" element={<OrderPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/ordersuccess/:orderId" element={<OrderSuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;
