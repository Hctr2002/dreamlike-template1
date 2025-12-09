import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Download, Printer, Share2 } from 'lucide-react';

export function FinanceModule() {
    return (
        <div className="min-h-screen bg-background text-white pt-24 pb-20 container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
                <Link to="/presentacion" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors uppercase text-sm font-bold">
                    <ArrowLeft className="w-4 h-4" /> Volver al Hub
                </Link>
                <div className="bg-primary/10 px-4 py-1 rounded-full border border-primary/20">
                    <span className="text-primary text-xs font-bold uppercase tracking-widest">Modo: Pre-Migración</span>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
                <div>
                    <h1 className="text-4xl font-heading font-bold text-white uppercase mb-2">Módulo de Finanzas</h1>
                    <p className="text-gray-400">Emisión y gestión de documentos tributarios electrónicos (DTE).</p>
                </div>
                <div className="flex gap-2">
                    <button className="border border-gray-700 text-white px-4 py-2 rounded-sm font-bold uppercase hover:bg-gray-800 transition-colors flex items-center gap-2 text-sm">
                        <Printer className="w-4 h-4" /> Imprimir
                    </button>
                    <button className="bg-primary text-black px-4 py-2 rounded-sm font-bold uppercase hover:bg-yellow-400 transition-colors flex items-center gap-2 text-sm">
                        <Download className="w-4 h-4" /> Exportar PDF
                    </button>
                </div>
            </div>

            {/* Invoice Mockup */}
            <div className="bg-white text-black p-8 md:p-12 rounded-sm max-w-4xl mx-auto shadow-2xl">
                <div className="flex justify-between items-start mb-12">
                    <div>
                        <h2 className="text-3xl font-heading font-bold uppercase mb-2">FACTURA ELECTRÓNICA</h2>
                        <p className="text-sm text-gray-600 font-bold">R.U.T.: 76.123.456-8</p>
                        <p className="text-sm text-gray-600">Nº 0001245</p>
                    </div>
                    <div className="text-right">
                        <div className="font-heading font-bold text-xl tracking-tight mb-1">DREAMLIKE INDUSTRIAL</div>
                        <p className="text-xs text-gray-500">Av. Industrial 1234, Parque Logístico</p>
                        <p className="text-xs text-gray-500">Santiago, Chile</p>
                        <p className="text-xs text-gray-500">+56 2 2345 6789</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-8 border-t border-b border-gray-200 py-6">
                    <div>
                        <h3 className="font-bold uppercase text-xs text-gray-500 mb-2">Cliente</h3>
                        <p className="font-bold">CONSTRUCTORA DEL SUR SPA</p>
                        <p className="text-sm text-gray-600">R.U.T.: 96.888.777-K</p>
                        <p className="text-sm text-gray-600">Av. Los Leones 2200, Providencia</p>
                    </div>
                    <div className="text-right">
                        <h3 className="font-bold uppercase text-xs text-gray-500 mb-2">Detalles</h3>
                        <p className="text-sm text-gray-600"><span className="font-bold">Fecha Emisión:</span> 09 Dic 2025</p>
                        <p className="text-sm text-gray-600"><span className="font-bold">Vencimiento:</span> 08 Ene 2026</p>
                        <p className="text-sm text-gray-600"><span className="font-bold">Orden de Compra:</span> OC-4599</p>
                    </div>
                </div>

                <table className="w-full text-left mb-8">
                    <thead>
                        <tr className="border-b-2 border-black text-xs uppercase">
                            <th className="py-2">Descripción</th>
                            <th className="py-2 text-center">Cant.</th>
                            <th className="py-2 text-right">Precio Unit.</th>
                            <th className="py-2 text-right">Total</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        <tr className="border-b border-gray-100">
                            <td className="py-3">Proyector LED Industrial 200W IP65</td>
                            <td className="py-3 text-center">10</td>
                            <td className="py-3 text-right">$ 45.000</td>
                            <td className="py-3 text-right">$ 450.000</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                            <td className="py-3">Cable THHN 12AWG (Rollo 100m)</td>
                            <td className="py-3 text-center">5</td>
                            <td className="py-3 text-right">$ 25.000</td>
                            <td className="py-3 text-right">$ 125.000</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                            <td className="py-3">Gabinete Metálico IP65 600x400</td>
                            <td className="py-3 text-center">2</td>
                            <td className="py-3 text-right">$ 55.000</td>
                            <td className="py-3 text-right">$ 110.000</td>
                        </tr>
                    </tbody>
                </table>

                <div className="flex justify-end">
                    <div className="w-64">
                        <div className="flex justify-between py-2 border-b border-gray-200 text-sm">
                            <span className="text-gray-600">Neto</span>
                            <span className="font-mono">$ 685.000</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-200 text-sm">
                            <span className="text-gray-600">IVA (19%)</span>
                            <span className="font-mono">$ 130.150</span>
                        </div>
                        <div className="flex justify-between py-4 text-lg font-bold">
                            <span>Total</span>
                            <span className="font-mono">$ 815.150</span>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                    <p className="text-xs text-gray-400 uppercase tracking-widest">Documento generado electrónicamente por Nexus Strategy ERP</p>
                </div>
            </div>
        </div>
    );
}
