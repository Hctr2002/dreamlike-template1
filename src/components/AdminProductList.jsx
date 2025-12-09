import React, { useState } from 'react';
import { useProducts } from '../context/ProductContext';
import { Edit, Trash2, Plus, Search } from 'lucide-react';

export function AdminProductList({ onEdit, onAdd }) {
    const { products, deleteProduct } = useProducts();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-gray-900 border border-gray-800 rounded-sm p-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                <h2 className="text-2xl font-heading font-bold text-white uppercase">Gestión de Productos</h2>
                <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64">
                        <input
                            type="text"
                            placeholder="Buscar producto..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-black border border-gray-700 rounded-sm py-2 pl-10 pr-4 text-white focus:border-primary focus:outline-none text-sm"
                        />
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    </div>
                    <button
                        onClick={onAdd}
                        className="bg-primary text-black px-4 py-2 rounded-sm font-bold text-sm uppercase hover:bg-yellow-400 transition-colors flex items-center gap-2"
                    >
                        <Plus className="w-4 h-4" /> Nuevo
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-gray-800 text-gray-500 text-xs uppercase tracking-wider">
                            <th className="py-4 font-bold">ID</th>
                            <th className="py-4 font-bold">Producto</th>
                            <th className="py-4 font-bold">Categoría</th>
                            <th className="py-4 font-bold">Precio</th>
                            <th className="py-4 font-bold">Stock</th>
                            <th className="py-4 font-bold text-right">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-300 text-sm">
                        {filteredProducts.map((product) => (
                            <tr key={product.id} className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                                <td className="py-4 font-mono text-gray-500">#{product.id}</td>
                                <td className="py-4 font-bold text-white">{product.name}</td>
                                <td className="py-4">
                                    <span className="bg-gray-800 px-2 py-1 rounded-sm text-xs text-gray-400 uppercase">{product.category}</span>
                                </td>
                                <td className="py-4">${product.price.toLocaleString()}</td>
                                <td className="py-4">
                                    <span className={`font-bold ${product.stock < 50 ? 'text-red-400' : 'text-green-400'}`}>
                                        {product.stock}
                                    </span>
                                </td>
                                <td className="py-4 text-right">
                                    <div className="flex justify-end gap-2">
                                        <button
                                            onClick={() => onEdit(product)}
                                            className="p-2 hover:bg-blue-500/10 text-blue-400 rounded-sm transition-colors"
                                            title="Editar"
                                        >
                                            <Edit className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => {
                                                if (window.confirm('¿Estás seguro de eliminar este producto?')) {
                                                    deleteProduct(product.id);
                                                }
                                            }}
                                            className="p-2 hover:bg-red-500/10 text-red-400 rounded-sm transition-colors"
                                            title="Eliminar"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
