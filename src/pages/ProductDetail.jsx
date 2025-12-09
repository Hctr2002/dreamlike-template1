import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import { ArrowLeft, ShoppingCart, Check, AlertTriangle } from 'lucide-react';

export function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { products } = useProducts();
    const { addToCart } = useCart();
    const [showAdded, setShowAdded] = useState(false);

    const product = products.find(p => p.id === Number(id));

    const handleAddToCart = () => {
        addToCart(product);
        setShowAdded(true);
        setTimeout(() => setShowAdded(false), 2000);
    };

    if (!product) {
        return (
            <div className="min-h-screen pt-32 pb-20 container mx-auto px-4 flex flex-col items-center justify-center text-center">
                <AlertTriangle className="w-16 h-16 text-yellow-500 mb-4" />
                <h2 className="text-3xl font-heading font-bold text-white mb-2">Producto no encontrado</h2>
                <p className="text-gray-400 mb-8">El producto que buscas no existe o ha sido eliminado.</p>
                <button
                    onClick={() => navigate('/catalogo')}
                    className="bg-primary text-black px-6 py-3 rounded-sm font-bold uppercase hover:bg-yellow-400 transition-colors"
                >
                    Volver al Catálogo
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-20 container mx-auto px-4 relative">
            {showAdded && (
                <div className="fixed top-24 right-4 z-50 bg-green-500 text-black px-6 py-3 rounded-sm font-bold uppercase shadow-lg flex items-center gap-2 animate-in slide-in-from-right">
                    <Check className="w-5 h-5" /> Producto agregado al carrito
                </div>
            )}

            <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors uppercase text-sm font-bold"
            >
                <ArrowLeft className="w-4 h-4" /> Volver
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Product Image Placeholder */}
                <div className="bg-gray-900 border border-gray-800 rounded-sm aspect-square flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                        <span className="text-white font-heading font-bold text-2xl tracking-widest uppercase opacity-20 select-none">Dreamlike Industrial</span>
                    </div>
                    <span className="font-bold uppercase text-xl tracking-widest text-gray-700">{product.category}</span>
                </div>

                {/* Product Info */}
                <div>
                    <div className="mb-2">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wide">
                            {product.category}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 uppercase leading-tight">
                        {product.name}
                    </h1>

                    <div className="text-3xl font-bold text-primary mb-6">
                        ${product.price.toLocaleString()}
                        <span className="text-sm text-gray-500 font-normal ml-2">+ IVA</span>
                    </div>

                    <div className="prose prose-invert mb-8 text-gray-400">
                        <p>{product.description}</p>
                    </div>

                    <div className="bg-gray-900 border border-gray-800 p-6 rounded-sm mb-8">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-gray-400 text-sm font-bold uppercase">Disponibilidad</span>
                            <span className={`flex items-center gap-2 font-bold ${product.stock > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                {product.stock > 0 ? (
                                    <><Check className="w-4 h-4" /> En Stock ({product.stock} un.)</>
                                ) : (
                                    <><AlertTriangle className="w-4 h-4" /> Agotado</>
                                )}
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-400 text-sm font-bold uppercase">Código SKU</span>
                            <span className="font-mono text-white">PRD-{product.id}</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/cotizar"
                            className="flex-1 bg-primary text-black py-4 rounded-sm font-bold text-center uppercase hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2"
                        >
                            Solicitar Cotización
                        </Link>
                        <button
                            onClick={handleAddToCart}
                            disabled={product.stock === 0}
                            className="flex-1 border border-gray-700 text-white py-4 rounded-sm font-bold text-center uppercase hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <ShoppingCart className="w-5 h-5" /> Agregar al Carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
