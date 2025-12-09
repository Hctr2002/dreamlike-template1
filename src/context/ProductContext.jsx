import React, { createContext, useState, useContext, useEffect } from 'react';

const ProductContext = createContext();

export function useProducts() {
    return useContext(ProductContext);
}

export function ProductProvider({ children }) {
    const [products, setProducts] = useState([
        { id: 1, name: 'Proyector LED 200W', category: 'Iluminación', price: 45000, stock: 150, description: 'Proyector LED de alta eficiencia para exteriores, IP65.' },
        { id: 2, name: 'Cable THHN 12AWG', category: 'Cableado', price: 25000, stock: 500, description: 'Rollo de 100 metros, cobre 100%, certificación SEC.' },
        { id: 3, name: 'Taladro Percutor 18V', category: 'Herramientas', price: 120000, stock: 25, description: 'Incluye 2 baterías y cargador rápido. Motor Brushless.' },
        { id: 4, name: 'Tablero 24 Polos', category: 'Tableros', price: 35000, stock: 40, description: 'Gabinete metálico IP54, incluye riel DIN.' },
        { id: 5, name: 'Automático 1x16A', category: 'Tableros', price: 3500, stock: 200, description: 'Interruptor termomagnético curva C, 6kA.' },
        { id: 6, name: 'Campana LED 150W', category: 'Iluminación', price: 65000, stock: 80, description: 'Iluminación industrial para galpones, 5000K.' },
    ]);

    const addProduct = (product) => {
        const newProduct = { ...product, id: Date.now() };
        setProducts([...products, newProduct]);
    };

    const updateProduct = (id, updatedProduct) => {
        setProducts(products.map(p => p.id === id ? { ...updatedProduct, id } : p));
    };

    const deleteProduct = (id) => {
        setProducts(products.filter(p => p.id !== id));
    };

    const value = {
        products,
        addProduct,
        updateProduct,
        deleteProduct
    };

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
}
