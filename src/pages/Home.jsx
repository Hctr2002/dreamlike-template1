import React from 'react';
import { ArrowRight, Zap, Cable, Hammer, Settings, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center pt-20 overflow-hidden">
                {/* Background Image Overlay */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
                        alt="Industrial Background"
                        className="w-full h-full object-cover opacity-50"
                    />
                </div>

                <div className="container mx-auto px-4 relative z-20">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-sm mb-6">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-primary text-xs font-bold tracking-widest uppercase">Especialistas en Materiales Eléctricos</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-6 uppercase text-white">
                            Potencia tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">Proyecto</span> con los Mejores Materiales
                        </h1>

                        <p className="text-gray-400 text-lg mb-8 max-w-xl leading-relaxed">
                            Distribución técnica de equipos eléctricos, iluminación industrial y ferretería de alto rendimiento para obras y contratistas.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/catalogo" className="bg-primary text-black px-8 py-4 rounded-sm font-bold text-lg hover:bg-yellow-400 transition-colors uppercase tracking-wide flex items-center justify-center gap-2 group">
                                Ver Catálogo 2025
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/contacto" className="border border-gray-700 bg-black/30 backdrop-blur-sm text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-white/5 transition-colors uppercase tracking-wide flex items-center justify-center">
                                Contactar Ventas
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="py-24 bg-gray-900/50">
                <div className="container mx-auto px-4">
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase mb-2 text-white">Categorías Industriales</h2>
                            <div className="h-1 w-20 bg-primary" />
                        </div>
                        <Link to="/catalogo" className="hidden md:flex items-center gap-2 text-primary font-bold uppercase text-sm hover:text-yellow-300 transition-colors">
                            Ver todas las categorías <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <CategoryCard
                            icon={<Zap className="w-10 h-10" />}
                            title="Iluminación Industrial"
                            desc="Proyectores, Campanas LED, Alumbrado Público"
                            image="https://images.unsplash.com/photo-1565626424178-c699f6601afd?q=80&w=1000&auto=format&fit=crop"
                        />
                        <CategoryCard
                            icon={<Cable className="w-10 h-10" />}
                            title="Cableado y Conexión"
                            desc="Cables THHN, Libres de Halógeno, Terminales"
                            image="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=1000&auto=format&fit=crop"
                        />
                        <CategoryCard
                            icon={<Hammer className="w-10 h-10" />}
                            title="Herramientas de Poder"
                            desc="Taladros, Esmeriles, Sierras Industriales"
                            image="https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=1000&auto=format&fit=crop"
                        />
                        <CategoryCard
                            icon={<Settings className="w-10 h-10" />}
                            title="Tableros Eléctricos"
                            desc="Gabinetes, Automáticos, Diferenciales"
                            image="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1000&auto=format&fit=crop"
                        />
                    </div>
                </div>
            </section>

            {/* Brands Section */}
            <section className="py-16 border-y border-gray-800 bg-black">
                <div className="container mx-auto px-4">
                    <p className="text-center text-gray-500 text-sm font-bold uppercase tracking-widest mb-10">
                        Trabajamos con las mejores marcas del mercado
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        <BrandLogo name="SCHNEIDER" />
                        <BrandLogo name="PHILLIPS" />
                        <BrandLogo name="MAKITA" />
                        <BrandLogo name="LEGRAND" />
                        <BrandLogo name="SIEMENS" />
                        <BrandLogo name="BOSCH" />
                    </div>
                </div>
            </section>
        </>
    );
}

function CategoryCard({ icon, title, desc, image }) {
    return (
        <div className="group relative h-80 overflow-hidden rounded-sm border border-gray-800 bg-gray-900 hover:border-primary/50 transition-all duration-300">
            <div className="absolute inset-0">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-20 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
            </div>

            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="mb-4 text-primary transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {icon}
                </div>
                <h3 className="text-2xl font-heading font-bold uppercase mb-2 text-white group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{desc}</p>
                <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300 delay-75">
                    Ver Productos <ChevronRight className="w-4 h-4" />
                </div>
            </div>
        </div>
    );
}

function BrandLogo({ name }) {
    return (
        <div className="text-2xl font-heading font-bold text-gray-400 hover:text-white transition-colors cursor-pointer">
            {name}
        </div>
    );
}
