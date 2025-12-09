import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProductProvider } from './context/ProductContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Catalog } from './pages/Catalog';
import { Contact } from './pages/Contact';
import { Quote } from './pages/Quote';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <Router>
          <div className="min-h-screen bg-background text-white font-sans selection:bg-primary selection:text-black flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalogo" element={<Catalog />} />
                <Route path="/contacto" element={<Contact />} />
                <Route path="/cotizar" element={<Quote />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registro" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
