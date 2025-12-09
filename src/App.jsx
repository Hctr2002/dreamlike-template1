import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Catalog } from './pages/Catalog';
import { Contact } from './pages/Contact';
import { Quote } from './pages/Quote';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Dashboard } from './pages/Dashboard';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { PresentationHub } from './pages/presentation/PresentationHub';
import { DashboardCentral } from './pages/presentation/DashboardCentral';
import { InventoryManagement } from './pages/presentation/InventoryManagement';
import { FinanceModule } from './pages/presentation/FinanceModule';

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <Router>
            <div className="min-h-screen bg-background text-white font-sans selection:bg-primary selection:text-black flex flex-col">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/catalogo" element={<Catalog />} />
                  <Route path="/producto/:id" element={<ProductDetail />} />
                  <Route path="/carrito" element={<Cart />} />
                  <Route path="/contacto" element={<Contact />} />
                  <Route path="/cotizar" element={<Quote />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/registro" element={<Register />} />
                  <Route path="/dashboard" element={<Dashboard />} />

                  {/* Presentation Routes (MVP Phase I) */}
                  <Route path="/presentacion" element={<PresentationHub />} />
                  <Route path="/presentacion/dashboard" element={<DashboardCentral />} />
                  <Route path="/presentacion/inventario" element={<InventoryManagement />} />
                  <Route path="/presentacion/finanzas" element={<FinanceModule />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
