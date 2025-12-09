import React from 'react';

export function Quote() {
    return (
        <div className="pt-32 pb-20 container mx-auto px-4 min-h-screen">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 uppercase text-center">Solicitar Cotización</h1>
                <p className="text-gray-400 mb-12 text-center text-lg">
                    Completa el formulario con los detalles de tu proyecto y te enviaremos una propuesta personalizada.
                </p>

                <form className="bg-gray-900 p-8 md:p-12 rounded-sm border border-gray-800">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-400 mb-1">Nombre Completo</label>
                            <input type="text" className="w-full bg-black border border-gray-700 rounded-sm py-3 px-4 text-white focus:border-primary focus:outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-400 mb-1">Empresa</label>
                            <input type="text" className="w-full bg-black border border-gray-700 rounded-sm py-3 px-4 text-white focus:border-primary focus:outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-400 mb-1">Email</label>
                            <input type="email" className="w-full bg-black border border-gray-700 rounded-sm py-3 px-4 text-white focus:border-primary focus:outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-400 mb-1">Teléfono</label>
                            <input type="tel" className="w-full bg-black border border-gray-700 rounded-sm py-3 px-4 text-white focus:border-primary focus:outline-none" />
                        </div>
                    </div>

                    <div className="mb-8">
                        <label className="block text-sm font-bold text-gray-400 mb-1">Detalle de Requerimientos</label>
                        <textarea rows="6" className="w-full bg-black border border-gray-700 rounded-sm py-3 px-4 text-white focus:border-primary focus:outline-none" placeholder="Describe los materiales, cantidades y especificaciones técnicas..."></textarea>
                    </div>

                    <button type="submit" className="w-full bg-primary text-black py-4 rounded-sm font-bold text-lg uppercase hover:bg-yellow-400 transition-colors">
                        Enviar Solicitud de Cotización
                    </button>
                </form>
            </div>
        </div>
    );
}
