import React, { useState, useEffect } from 'react';
import { X, Save } from 'lucide-react';

export function ProductForm({ product, onSave, onCancel }) {
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        price: '',
        stock: '',
        description: ''
    });

    useEffect(() => {
        if (product) {
            setFormData(product);
        }
    }, [product]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({
            ...formData,
            price: Number(formData.price),
            stock: Number(formData.stock)
        });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="bg-gray-900 border border-gray-800 rounded-sm w-full max-w-lg p-6 relative">
                <button
                    onClick={onCancel}
                    className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>

                <h2 className="text-2xl font-heading font-bold text-white uppercase mb-6">
                    {product ? 'Editar Producto' : 'Nuevo Producto'}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-gray-400 mb-1">Nombre del Producto</label>
                        <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-black border border-gray-700 rounded-sm py-2 px-4 text-white focus:border-primary focus:outline-none"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-bold text-gray-400 mb-1">Categoría</label>
                            <select
                                value={formData.category}
                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                className="w-full bg-black border border-gray-700 rounded-sm py-2 px-4 text-white focus:border-primary focus:outline-none"
                            >
                                <option value="">Seleccionar...</option>
                                <option value="Iluminación">Iluminación</option>
                                <option value="Cableado">Cableado</option>
                                <option value="Herramientas">Herramientas</option>
                                <option value="Tableros">Tableros</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-400 mb-1">Stock</label>
                            <input
                                type="number"
                                required
                                min="0"
                                value={formData.stock}
                                onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                                className="w-full bg-black border border-gray-700 rounded-sm py-2 px-4 text-white focus:border-primary focus:outline-none"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-400 mb-1">Precio</label>
                        <input
                            type="number"
                            required
                            min="0"
                            value={formData.price}
                            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                            className="w-full bg-black border border-gray-700 rounded-sm py-2 px-4 text-white focus:border-primary focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-400 mb-1">Descripción</label>
                        <textarea
                            rows="3"
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            className="w-full bg-black border border-gray-700 rounded-sm py-2 px-4 text-white focus:border-primary focus:outline-none"
                        ></textarea>
                    </div>

                    <div className="flex justify-end gap-3 mt-6">
                        <button
                            type="button"
                            onClick={onCancel}
                            className="px-4 py-2 text-sm font-bold text-gray-400 hover:text-white uppercase transition-colors"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="bg-primary text-black px-6 py-2 rounded-sm font-bold text-sm uppercase hover:bg-yellow-400 transition-colors flex items-center gap-2"
                        >
                            <Save className="w-4 h-4" /> Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
