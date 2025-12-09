import React from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';

export function Catalog() {
    const { products } = useProducts();

    return (
        <div className="pt-32 pb-20 container mx-auto px-4 min-h-screen">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8 uppercase">Catálogo Técnico</h1>
            <p className="text-gray-400 mb-8">Explora nuestra amplia gama de productos industriales.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {products.map((product) => (
                    <div key={product.id} className="bg-gray-900 border border-gray-800 p-6 rounded-sm hover:border-primary/50 transition-colors group">
                        <div className="h-48 bg-gray-800 mb-4 rounded-sm flex items-center justify-center text-gray-600 group-hover:bg-gray-800/80 transition-colors">
                            {/* Placeholder for product image */}
                            <span className="font-bold uppercase text-xs tracking-widest">{product.category}</span>
                        </div>
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{product.name}</h3>
                            <span className="text-primary font-bold">${product.price.toLocaleString()}</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>
                        <div className="flex justify-between items-center">
                            <span className={`text-xs font-bold ${product.stock > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                {product.stock > 0 ? `Stock: ${product.stock}` : 'Agotado'}
                            </span>
                            <Link to={`/producto/${product.id}`} className="text-primary font-bold text-sm uppercase hover:text-yellow-300">Ver Detalles</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
