import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, Filter, Plus, Edit, Trash2, MoreVertical } from 'lucide-react';

export function InventoryManagement() {
    const mockProducts = [
        { id: 'PRD-001', name: 'Proyector LED Industrial 200W', category: 'Iluminación', stock: 150, price: 45000, status: 'active' },
        { id: 'PRD-002', name: 'Cable THHN 12AWG (Rollo 100m)', category: 'Cableado', stock: 42, price: 25000, status: 'warning' },
        { id: 'PRD-003', name: 'Taladro Percutor Brushless 18V', category: 'Herramientas', stock: 12, price: 120000, status: 'active' },
        { id: 'PRD-004', name: 'Gabinete Metálico IP65 600x400', category: 'Tableros', stock: 0, price: 55000, status: 'critical' },
        { id: 'PRD-005', name: 'Interruptor Automático 1x16A', category: 'Protección', stock: 200, price: 3500, status: 'active' },
    ];

    return (
        <div className="min-h-screen bg-background text-white pt-24 pb-20 container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
                <Link to="/presentacion" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors uppercase text-sm font-bold">
                    <ArrowLeft className="w-4 h-4" /> Volver al Hub
                </Link>
                <div className="bg-primary/10 px-4 py-1 rounded-full border border-primary/20">
                    <span className="text-primary text-xs font-bold uppercase tracking-widest">Modo: Control Total</span>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
                <div>
                    <h1 className="text-4xl font-heading font-bold text-white uppercase mb-2">Gestión de Inventario</h1>
                    <p className="text-gray-400">Control centralizado de catálogo y existencias.</p>
                </div>
                <button className="bg-primary text-black px-6 py-3 rounded-sm font-bold uppercase hover:bg-yellow-400 transition-colors flex items-center gap-2">
                    <Plus className="w-5 h-5" /> Nuevo Producto
                </button>
            </div>

            {/* Toolbar */}
            <div className="bg-gray-900 border border-gray-800 p-4 rounded-sm mb-6 flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <input
                        type="text"
                        placeholder="Buscar por SKU, nombre o categoría..."
                        className="w-full bg-black border border-gray-700 rounded-sm py-2.5 pl-10 pr-4 text-white focus:border-primary focus:outline-none"
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                </div>
                <button className="px-4 py-2 border border-gray-700 rounded-sm text-gray-300 hover:text-white hover:border-gray-500 flex items-center gap-2 text-sm font-bold uppercase">
                    <Filter className="w-4 h-4" /> Filtros
                </button>
            </div>

            {/* Table */}
            <div className="bg-gray-900 border border-gray-800 rounded-sm overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-gray-800 text-gray-500 text-xs uppercase tracking-wider bg-black/20">
                            <th className="py-4 px-6 font-bold">SKU</th>
                            <th className="py-4 px-6 font-bold">Producto</th>
                            <th className="py-4 px-6 font-bold">Categoría</th>
                            <th className="py-4 px-6 font-bold text-center">Stock</th>
                            <th className="py-4 px-6 font-bold text-right">Precio Unit.</th>
                            <th className="py-4 px-6 font-bold text-right">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-300 text-sm">
                        {mockProducts.map((product) => (
                            <tr key={product.id} className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors group">
                                <td className="py-4 px-6 font-mono text-gray-500">{product.id}</td>
                                <td className="py-4 px-6 font-bold text-white">{product.name}</td>
                                <td className="py-4 px-6">
                                    <span className="bg-gray-800 px-2 py-1 rounded-sm text-xs text-gray-400 uppercase">{product.category}</span>
                                </td>
                                <td className="py-4 px-6 text-center">
                                    <span className={`font-bold px-2 py-1 rounded-sm text-xs ${product.stock === 0 ? 'bg-red-500/10 text-red-500' :
                                            product.stock < 50 ? 'bg-yellow-500/10 text-yellow-500' :
                                                'bg-green-500/10 text-green-500'
                                        }`}>
                                        {product.stock} un.
                                    </span>
                                </td>
                                <td className="py-4 px-6 text-right font-mono">
                                    ${product.price.toLocaleString()}
                                </td>
                                <td className="py-4 px-6 text-right">
                                    <div className="flex justify-end gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
                                        <button className="p-2 hover:bg-blue-500/10 text-blue-400 rounded-sm transition-colors" title="Editar">
                                            <Edit className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 hover:bg-red-500/10 text-red-400 rounded-sm transition-colors" title="Eliminar">
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
