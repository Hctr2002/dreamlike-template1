import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, TrendingUp, Activity, ShieldCheck } from 'lucide-react';

export function DashboardCentral() {
    return (
        <div className="min-h-screen bg-background text-white pt-24 pb-20 container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
                <Link to="/presentacion" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors uppercase text-sm font-bold">
                    <ArrowLeft className="w-4 h-4" /> Volver al Hub
                </Link>
                <div className="bg-primary/10 px-4 py-1 rounded-full border border-primary/20">
                    <span className="text-primary text-xs font-bold uppercase tracking-widest">Modo: Visualización Ejecutiva</span>
                </div>
            </div>

            <h1 className="text-4xl font-heading font-bold text-white uppercase mb-2">Dashboard Central</h1>
            <p className="text-gray-400 mb-12">Estado Operacional: <span className="text-green-500 font-bold">OPTIMIZADO</span></p>

            {/* Critical Alerts Section */}
            <div className="bg-red-500/5 border border-red-500/20 rounded-sm p-6 mb-12 flex items-start gap-4">
                <div className="bg-red-500/10 p-3 rounded-sm">
                    <AlertTriangle className="w-6 h-6 text-red-500" />
                </div>
                <div>
                    <h3 className="text-red-500 font-bold uppercase mb-1">Alerta de Stock Crítico</h3>
                    <p className="text-gray-400 text-sm">3 productos requieren reposición inmediata para evitar quiebre de stock en 48 horas.</p>
                    <button className="mt-4 text-red-400 hover:text-white text-sm font-bold uppercase underline decoration-dotted">Ver Productos Afectados</button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-gray-900 border border-gray-800 p-6 rounded-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <TrendingUp className="w-24 h-24 text-white" />
                    </div>
                    <h3 className="text-gray-400 font-bold uppercase text-xs mb-2">Ventas Semanales</h3>
                    <div className="text-4xl font-mono font-bold text-white mb-2">$ 4.2M</div>
                    <div className="text-green-500 text-xs font-bold flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" /> +12.5% vs semana anterior
                    </div>
                </div>

                <div className="bg-gray-900 border border-gray-800 p-6 rounded-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Activity className="w-24 h-24 text-white" />
                    </div>
                    <h3 className="text-gray-400 font-bold uppercase text-xs mb-2">Pedidos Activos</h3>
                    <div className="text-4xl font-mono font-bold text-white mb-2">18</div>
                    <div className="text-blue-400 text-xs font-bold">
                        6 En preparación / 12 En ruta
                    </div>
                </div>

                <div className="bg-gray-900 border border-gray-800 p-6 rounded-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <ShieldCheck className="w-24 h-24 text-white" />
                    </div>
                    <h3 className="text-gray-400 font-bold uppercase text-xs mb-2">Salud del Inventario</h3>
                    <div className="text-4xl font-mono font-bold text-white mb-2">94%</div>
                    <div className="text-gray-500 text-xs">
                        Valorización total: $ 45.8M
                    </div>
                </div>
            </div>

            {/* Operational Graph Placeholder */}
            <div className="bg-gray-900 border border-gray-800 p-8 rounded-sm h-64 flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-end justify-between px-8 pb-8 opacity-20">
                    {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                        <div key={i} className="w-8 bg-primary" style={{ height: `${h}%` }}></div>
                    ))}
                </div>
                <div className="text-center z-10">
                    <h3 className="text-2xl font-heading font-bold text-white uppercase mb-2">Flujo de Operaciones</h3>
                    <p className="text-gray-500 text-sm">Visualización de actividad en tiempo real</p>
                </div>
            </div>
        </div>
    );
}
