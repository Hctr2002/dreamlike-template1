import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Contact() {
    return (
        <div className="pt-32 pb-20 container mx-auto px-4 min-h-screen">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8 uppercase">Contacto</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <p className="text-gray-400 mb-8 text-lg">
                        Estamos listos para asesorarte en tu próximo proyecto. Contáctanos para cotizaciones y soporte técnico.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-sm">
                                <MapPin className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-lg mb-1">Ubicación</h3>
                                <p className="text-gray-400">Av. Industrial 1234, Parque Logístico<br />Santiago, Chile</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-sm">
                                <Phone className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-lg mb-1">Teléfono</h3>
                                <p className="text-gray-400">+56 2 2345 6789</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-sm">
                                <Mail className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-lg mb-1">Email</h3>
                                <p className="text-gray-400">ventas@dreamlike.cl</p>
                            </div>
                        </div>
                    </div>
                </div>

                <form className="bg-gray-900 p-8 rounded-sm border border-gray-800">
                    <h3 className="text-2xl font-heading font-bold text-white mb-6 uppercase">Envíanos un mensaje</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-bold text-gray-400 mb-1">Nombre</label>
                            <input type="text" className="w-full bg-black border border-gray-700 rounded-sm py-3 px-4 text-white focus:border-primary focus:outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-400 mb-1">Email</label>
                            <input type="email" className="w-full bg-black border border-gray-700 rounded-sm py-3 px-4 text-white focus:border-primary focus:outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-400 mb-1">Mensaje</label>
                            <textarea rows="4" className="w-full bg-black border border-gray-700 rounded-sm py-3 px-4 text-white focus:border-primary focus:outline-none"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-primary text-black py-4 rounded-sm font-bold text-lg uppercase hover:bg-yellow-400 transition-colors">
                            Enviar Mensaje
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
