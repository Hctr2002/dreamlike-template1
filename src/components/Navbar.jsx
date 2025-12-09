import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X, Zap, User, LogOut, ShoppingCart } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logout } = useAuth();
    const { getCartCount } = useCart();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-gray-800">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <div className="bg-primary p-1.5 rounded-sm">
                        <Zap className="w-6 h-6 text-black fill-black" />
                    </div>
                    <span className="text-2xl font-heading font-bold tracking-tight text-white">DREAMLIKE</span>
                </Link>

                {/* Desktop Search & Nav */}
                <div className="hidden md:flex items-center gap-8 flex-1 justify-end">
                    <div className="relative w-96 group">
                        <input
                            type="text"
                            placeholder="Buscar pieza, código o categoría..."
                            className="w-full bg-gray-900 border border-gray-700 rounded-sm py-2.5 pl-4 pr-10 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-500 text-white"
                        />
                        <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                    </div>

                    <Link to="/catalogo" className="text-sm font-bold text-white hover:text-primary transition-colors uppercase tracking-wide">Catálogo Técnico</Link>

                    <Link to="/carrito" className="relative text-white hover:text-primary transition-colors">
                        <ShoppingCart className="w-5 h-5" />
                        {getCartCount() > 0 && (
                            <span className="absolute -top-2 -right-2 bg-primary text-black text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                                {getCartCount()}
                            </span>
                        )}
                    </Link>

                    {user ? (
                        <div className="flex items-center gap-4">
                            <Link to="/dashboard" className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors uppercase tracking-wide">
                                <User className="w-4 h-4" /> Mi Cuenta
                            </Link>
                            <button onClick={handleLogout} className="text-sm font-bold text-red-400 hover:text-red-300 transition-colors uppercase tracking-wide">
                                <LogOut className="w-4 h-4" />
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-4">
                            <Link to="/login" className="text-sm font-bold text-white hover:text-primary transition-colors uppercase tracking-wide">Iniciar Sesión</Link>
                            <Link to="/cotizar" className="bg-primary text-black px-5 py-2.5 rounded-sm font-bold text-sm hover:bg-yellow-400 transition-colors uppercase tracking-wide">
                                Cotizar Ahora
                            </Link>
                        </div>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-gray-300 hover:text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-gray-900 border-b border-gray-800 p-4 space-y-4">
                    <input
                        type="text"
                        placeholder="Buscar..."
                        className="w-full bg-black border border-gray-700 rounded-sm py-2 px-4 text-sm focus:border-primary focus:outline-none text-white"
                    />
                    <Link to="/catalogo" className="block text-sm font-bold text-white hover:text-primary uppercase" onClick={() => setIsMenuOpen(false)}>Catálogo Técnico</Link>

                    {user ? (
                        <>
                            <Link to="/dashboard" className="block text-sm font-bold text-white hover:text-primary uppercase" onClick={() => setIsMenuOpen(false)}>Mi Cuenta</Link>
                            <button onClick={() => { handleLogout(); setIsMenuOpen(false); }} className="block w-full text-left text-sm font-bold text-red-400 hover:text-red-300 uppercase">Cerrar Sesión</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="block text-sm font-bold text-white hover:text-primary uppercase" onClick={() => setIsMenuOpen(false)}>Iniciar Sesión</Link>
                            <Link to="/cotizar" className="block w-full text-center bg-primary text-black py-3 rounded-sm font-bold text-sm uppercase" onClick={() => setIsMenuOpen(false)}>
                                Cotizar Ahora
                            </Link>
                        </>
                    )}
                </div>
            )}
        </nav>
    );
}
