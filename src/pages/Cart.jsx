import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

export function Cart() {
    const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

    if (cart.length === 0) {
        return (
            <div className="min-h-screen pt-32 pb-20 container mx-auto px-4 flex flex-col items-center justify-center text-center">
                <ShoppingBag className="w-16 h-16 text-gray-700 mb-4" />
                <h2 className="text-3xl font-heading font-bold text-white mb-2 uppercase">Tu carrito está vacío</h2>
                <p className="text-gray-400 mb-8">Parece que aún no has agregado productos.</p>
                <Link
                    to="/catalogo"
                    className="bg-primary text-black px-6 py-3 rounded-sm font-bold uppercase hover:bg-yellow-400 transition-colors"
                >
                    Ir al Catálogo
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-20 container mx-auto px-4">
            <h1 className="text-4xl font-heading font-bold text-white mb-8 uppercase">Carrito de Compras</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                    <div className="bg-gray-900 border border-gray-800 rounded-sm overflow-hidden">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-gray-800 text-gray-500 text-xs uppercase tracking-wider bg-black/20">
                                    <th className="py-4 px-6 font-bold">Producto</th>
                                    <th className="py-4 px-6 font-bold text-center">Cantidad</th>
                                    <th className="py-4 px-6 font-bold text-right">Precio</th>
                                    <th className="py-4 px-6 font-bold text-right">Total</th>
                                    <th className="py-4 px-6 font-bold text-center"></th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300 text-sm">
                                {cart.map((item) => (
                                    <tr key={item.id} className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-white">{item.name}</div>
                                            <div className="text-xs text-gray-500 uppercase">{item.category}</div>
                                        </td>
                                        <td className="py-4 px-6 text-center">
                                            <div className="flex items-center justify-center gap-2">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="w-6 h-6 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded-sm text-xs font-bold"
                                                >
                                                    -
                                                </button>
                                                <span className="w-8 text-center font-mono">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="w-6 h-6 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded-sm text-xs font-bold"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 text-right font-mono text-gray-400">
                                            ${item.price.toLocaleString()}
                                        </td>
                                        <td className="py-4 px-6 text-right font-mono font-bold text-primary">
                                            ${(item.price * item.quantity).toLocaleString()}
                                        </td>
                                        <td className="py-4 px-6 text-center">
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-red-400 hover:text-red-300 transition-colors p-2"
                                                title="Eliminar"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-6 flex justify-between items-center">
                        <button
                            onClick={clearCart}
                            className="text-red-400 hover:text-red-300 text-sm font-bold uppercase underline decoration-dotted"
                        >
                            Vaciar Carrito
                        </button>
                        <Link to="/catalogo" className="text-gray-400 hover:text-white text-sm font-bold uppercase flex items-center gap-2">
                            Seguir Comprando <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                <div className="lg:col-span-1">
                    <div className="bg-gray-900 border border-gray-800 p-6 rounded-sm sticky top-24">
                        <h3 className="text-xl font-heading font-bold text-white uppercase mb-6 border-b border-gray-800 pb-4">Resumen de Compra</h3>

                        <div className="space-y-3 text-sm mb-6">
                            <div className="flex justify-between text-gray-400">
                                <span>Subtotal</span>
                                <span className="font-mono">${getCartTotal().toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-gray-400">
                                <span>IVA (19%)</span>
                                <span className="font-mono">${Math.round(getCartTotal() * 0.19).toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-white font-bold text-lg pt-4 border-t border-gray-800">
                                <span>Total</span>
                                <span className="font-mono text-primary">${Math.round(getCartTotal() * 1.19).toLocaleString()}</span>
                            </div>
                        </div>

                        <button className="w-full bg-primary text-black py-4 rounded-sm font-bold text-center uppercase hover:bg-yellow-400 transition-colors mb-3">
                            Proceder al Pago
                        </button>
                        <p className="text-xs text-center text-gray-500">
                            Transacción segura y encriptada.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
