import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useProducts } from '../context/ProductContext';
import { useNavigate } from 'react-router-dom';
import { Package, Clock, FileText, User, LogOut, TrendingUp, AlertTriangle, DollarSign } from 'lucide-react';
import { AdminProductList } from '../components/AdminProductList';
import { ProductForm } from '../components/ProductForm';

export function Dashboard() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const { addProduct, updateProduct } = useProducts();

    const [isEditing, setIsEditing] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const handleSaveProduct = (productData) => {
        if (currentProduct) {
            updateProduct(currentProduct.id, productData);
        } else {
            addProduct(productData);
        }
        setIsEditing(false);
        setCurrentProduct(null);
    };

    if (!user) {
        navigate('/login');
        return null;
    }

    return (
        <div className="pt-32 pb-20 container mx-auto px-4 min-h-screen">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
                <div>
                    <h1 className="text-4xl font-heading font-bold text-white uppercase">
                        {user.role === 'admin' ? 'Panel de Administración' : 'Mi Cuenta'}
                    </h1>
                    <p className="text-gray-400">Bienvenido, <span className="text-primary font-bold">{user.name}</span></p>
                </div>
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 text-red-400 hover:text-red-300 font-bold text-sm uppercase border border-red-900/50 bg-red-900/10 px-4 py-2 rounded-sm"
                >
                    <LogOut className="w-4 h-4" /> Cerrar Sesión
                </button>
            </div>

            {user.role === 'admin' ? (
                // ADMIN DASHBOARD
                <>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                        <StatCard icon={<DollarSign className="text-green-500" />} title="Ventas del Mes" value="$ 12.5M" sub="↑ 15% vs mes anterior" />
                        <StatCard icon={<Package className="text-primary" />} title="Pedidos Activos" value="24" sub="8 pendientes de despacho" />
                        <StatCard icon={<AlertTriangle className="text-yellow-500" />} title="Stock Crítico" value="5" sub="Productos bajo mínimo" />
                        <StatCard icon={<User className="text-blue-500" />} title="Clientes Nuevos" value="12" sub="Esta semana" />
                    </div>

                    <AdminProductList
                        onEdit={(product) => {
                            setCurrentProduct(product);
                            setIsEditing(true);
                        }}
                        onAdd={() => {
                            setCurrentProduct(null);
                            setIsEditing(true);
                        }}
                    />

                    {isEditing && (
                        <ProductForm
                            product={currentProduct}
                            onSave={handleSaveProduct}
                            onCancel={() => {
                                setIsEditing(false);
                                setCurrentProduct(null);
                            }}
                        />
                    )}
                </>
            ) : (
                // CLIENT DASHBOARD
                <>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-gray-900 border border-gray-800 p-6 rounded-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-blue-500/10 p-3 rounded-sm">
                                    <User className="w-6 h-6 text-blue-500" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold uppercase">Datos Personales</h3>
                                    <p className="text-xs text-gray-500">Información de perfil</p>
                                </div>
                            </div>
                            <div className="space-y-2 text-sm text-gray-400">
                                <p><span className="text-gray-500">Email:</span> {user.email}</p>
                                <p><span className="text-gray-500">Empresa:</span> {user.company}</p>
                                <p><span className="text-gray-500">Rol:</span> Cliente</p>
                            </div>
                        </div>

                        <div className="bg-gray-900 border border-gray-800 p-6 rounded-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-primary/10 p-3 rounded-sm">
                                    <Package className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold uppercase">Pedidos Activos</h3>
                                    <p className="text-xs text-gray-500">Estado de tus compras</p>
                                </div>
                            </div>
                            <div className="text-3xl font-bold text-white mb-1">3</div>
                            <p className="text-sm text-gray-400">Pedidos en tránsito</p>
                        </div>

                        <div className="bg-gray-900 border border-gray-800 p-6 rounded-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-green-500/10 p-3 rounded-sm">
                                    <FileText className="w-6 h-6 text-green-500" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold uppercase">Cotizaciones</h3>
                                    <p className="text-xs text-gray-500">Historial de solicitudes</p>
                                </div>
                            </div>
                            <div className="text-3xl font-bold text-white mb-1">12</div>
                            <p className="text-sm text-gray-400">Cotizaciones realizadas</p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-heading font-bold text-white uppercase mb-6">Últimos Pedidos</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-gray-800 text-gray-500 text-sm uppercase tracking-wider">
                                    <th className="py-4 font-bold">ID Pedido</th>
                                    <th className="py-4 font-bold">Fecha</th>
                                    <th className="py-4 font-bold">Estado</th>
                                    <th className="py-4 font-bold">Total</th>
                                    <th className="py-4 font-bold">Acción</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300 text-sm">
                                {[10234, 10233, 10230].map((id) => (
                                    <tr key={id} className="border-b border-gray-800 hover:bg-gray-900/50 transition-colors">
                                        <td className="py-4 font-mono text-primary">#{id}</td>
                                        <td className="py-4">08 Dic 2025</td>
                                        <td className="py-4">
                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">
                                                <Clock className="w-3 h-3" /> En Proceso
                                            </span>
                                        </td>
                                        <td className="py-4">$ 1.250.000</td>
                                        <td className="py-4">
                                            <button className="text-primary hover:text-white font-bold text-xs uppercase">Ver Detalle</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </div>
    );
}

function StatCard({ icon, title, value, sub }) {
    return (
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-sm">
            <div className="flex items-center gap-4 mb-4">
                <div className="bg-gray-800 p-3 rounded-sm">
                    {React.cloneElement(icon, { className: `w-6 h-6 ${icon.props.className}` })}
                </div>
                <div>
                    <h3 className="text-gray-400 font-bold uppercase text-xs">{title}</h3>
                    <div className="text-2xl font-bold text-white">{value}</div>
                </div>
            </div>
            <p className="text-xs text-gray-500">{sub}</p>
        </div>
    );
}
