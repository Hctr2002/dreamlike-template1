import React from 'react';

export function Catalog() {
    return (
        <div className="pt-32 pb-20 container mx-auto px-4 min-h-screen">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8 uppercase">Catálogo Técnico</h1>
            <p className="text-gray-400 mb-8">Explora nuestra amplia gama de productos industriales.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Placeholder for catalog items */}
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="bg-gray-900 border border-gray-800 p-6 rounded-sm hover:border-primary/50 transition-colors">
                        <div className="h-48 bg-gray-800 mb-4 rounded-sm flex items-center justify-center text-gray-600">
                            Imagen Producto
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Producto Industrial {item}</h3>
                        <p className="text-gray-400 text-sm mb-4">Descripción técnica del producto. Especificaciones y detalles.</p>
                        <button className="text-primary font-bold text-sm uppercase hover:text-yellow-300">Ver Detalles</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
