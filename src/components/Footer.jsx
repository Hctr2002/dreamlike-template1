import React from 'react';
import { Zap, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <footer className="bg-gray-900 pt-20 pb-10 border-t border-gray-800 text-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-primary p-1.5 rounded-sm">
                                <Zap className="w-5 h-5 text-black fill-black" />
                            </div>
                            <span className="text-xl font-heading font-bold tracking-tight">DREAMLIKE</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Proveedor líder de materiales eléctricos y ferretería industrial. Calidad garantizada y despacho a todo el país.
                        </p>
                        <div className="flex gap-4">
                            <SocialIcon icon="FB" />
                            <SocialIcon icon="IG" />
                            <SocialIcon icon="IN" />
                        </div>
                    </div>

                    <div>
                        <h4 className="font-heading font-bold text-lg mb-6 uppercase">Navegación</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><Link to="/" className="hover:text-primary transition-colors">Inicio</Link></li>
                            <li><Link to="/catalogo" className="hover:text-primary transition-colors">Catálogo</Link></li>
                            <li><Link to="/marcas" className="hover:text-primary transition-colors">Marcas</Link></li>
                            <li><Link to="/ofertas" className="hover:text-primary transition-colors">Ofertas</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-heading font-bold text-lg mb-6 uppercase">Legal</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><Link to="/terminos" className="hover:text-primary transition-colors">Términos y Condiciones</Link></li>
                            <li><Link to="/privacidad" className="hover:text-primary transition-colors">Política de Privacidad</Link></li>
                            <li><Link to="/despachos" className="hover:text-primary transition-colors">Despachos y Retiros</Link></li>
                            <li><Link to="/garantias" className="hover:text-primary transition-colors">Garantías</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-heading font-bold text-lg mb-6 uppercase">Contacto</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary shrink-0" />
                                <span>Av. Industrial 1234, Parque Logístico, Santiago, Chile</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span>+56 2 2345 6789</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span>ventas@dreamlike.cl</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
                    <p>&copy; 2025 Dreamlike Industrial. Todos los derechos reservados.</p>
                    <p>Designed for Industrial Performance</p>
                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ icon }) {
    return (
        <a href="#" className="w-10 h-10 rounded-sm bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black transition-all font-bold text-xs">
            {icon}
        </a>
    );
}
