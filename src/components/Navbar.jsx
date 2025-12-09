import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, Zap } from 'lucide-react';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                    <Link to="/contacto" className="text-sm font-bold text-white hover:text-primary transition-colors uppercase tracking-wide">Contacto</Link>

                    <Link to="/cotizar" className="bg-primary text-black px-5 py-2.5 rounded-sm font-bold text-sm hover:bg-yellow-400 transition-colors uppercase tracking-wide">
                        Cotizar Ahora
                    </Link>
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
                    <Link to="/contacto" className="block text-sm font-bold text-white hover:text-primary uppercase" onClick={() => setIsMenuOpen(false)}>Contacto</Link>
                    <Link to="/cotizar" className="block w-full text-center bg-primary text-black py-3 rounded-sm font-bold text-sm uppercase" onClick={() => setIsMenuOpen(false)}>
                        Cotizar Ahora
                    </Link>
                </div>
            )}
        </nav>
    );
}
