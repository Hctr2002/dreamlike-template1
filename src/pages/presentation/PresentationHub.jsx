import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Package, FileText, ArrowRight, Shield } from 'lucide-react';

export function PresentationHub() {
    return (
        <div className="min-h-screen bg-background text-white pt-32 pb-20 container mx-auto px-4 flex flex-col items-center justify-center">
            <div className="mb-12 text-center">
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
                    <Shield className="w-12 h-12 text-primary" />
                </div>
                <h1 className="text-5xl md:text-6xl font-heading font-bold uppercase mb-4 tracking-tight">
                    Nexus Strategy <span className="text-primary">Prime</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Fase I: Blindaje Operacional y Autonomía Inmediata.
                    <br />
                    <span className="text-sm uppercase tracking-widest text-gray-600 mt-2 block">Acceso Restringido - Nivel Ejecutivo</span>
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
                <Link to="/presentacion/dashboard" className="group bg-gray-900 border border-gray-800 p-8 rounded-sm hover:border-primary/50 transition-all hover:transform hover:-translate-y-1">
                    <div className="bg-blue-500/10 w-16 h-16 rounded-sm flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                        <LayoutDashboard className="w-8 h-8 text-blue-500" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold uppercase mb-2 group-hover:text-primary transition-colors">Dashboard Central</h3>
                    <p className="text-gray-400 text-sm mb-6">Prueba de Cero-Error. Visibilidad total del estado operacional en tiempo real.</p>
                    <div className="flex items-center text-primary font-bold text-sm uppercase">
                        Ver Módulo <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                </Link>

                <Link to="/presentacion/inventario" className="group bg-gray-900 border border-gray-800 p-8 rounded-sm hover:border-primary/50 transition-all hover:transform hover:-translate-y-1">
                    <div className="bg-primary/10 w-16 h-16 rounded-sm flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                        <Package className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold uppercase mb-2 group-hover:text-primary transition-colors">Gestión de Inventario</h3>
                    <p className="text-gray-400 text-sm mb-6">Prueba de Autonomía. Control absoluto sobre stock, precios y catálogo.</p>
                    <div className="flex items-center text-primary font-bold text-sm uppercase">
                        Ver Módulo <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                </Link>

                <Link to="/presentacion/finanzas" className="group bg-gray-900 border border-gray-800 p-8 rounded-sm hover:border-primary/50 transition-all hover:transform hover:-translate-y-1">
                    <div className="bg-green-500/10 w-16 h-16 rounded-sm flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                        <FileText className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold uppercase mb-2 group-hover:text-primary transition-colors">Módulo de Finanzas</h3>
                    <p className="text-gray-400 text-sm mb-6">Prueba de Migración. Preparación para facturación electrónica y flujo de caja.</p>
                    <div className="flex items-center text-primary font-bold text-sm uppercase">
                        Ver Módulo <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                </Link>
            </div>
        </div>
    );
}
