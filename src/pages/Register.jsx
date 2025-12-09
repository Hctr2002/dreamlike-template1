import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { Zap, User, Building, Mail, Lock } from 'lucide-react';

export function Register() {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }
        register(formData);
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen pt-20 flex items-center justify-center bg-background px-4 py-12">
            <div className="max-w-md w-full bg-gray-900 border border-gray-800 rounded-sm p-8">
                <div className="flex justify-center mb-6">
                    <div className="bg-primary p-2 rounded-sm">
                        <Zap className="w-8 h-8 text-black fill-black" />
                    </div>
                </div>

                <h2 className="text-3xl font-heading font-bold text-center text-white mb-2 uppercase">Crear Cuenta</h2>
                <p className="text-gray-400 text-center mb-8 text-sm">Únete a la red de profesionales Dreamlike</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-gray-400 mb-1">Nombre Completo</label>
                        <div className="relative">
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full bg-black border border-gray-700 rounded-sm py-3 pl-10 pr-4 text-white focus:border-primary focus:outline-none"
                            />
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-400 mb-1">Empresa</label>
                        <div className="relative">
                            <input
                                type="text"
                                required
                                value={formData.company}
                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                className="w-full bg-black border border-gray-700 rounded-sm py-3 pl-10 pr-4 text-white focus:border-primary focus:outline-none"
                            />
                            <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-400 mb-1">Email Corporativo</label>
                        <div className="relative">
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full bg-black border border-gray-700 rounded-sm py-3 pl-10 pr-4 text-white focus:border-primary focus:outline-none"
                            />
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-400 mb-1">Contraseña</label>
                        <div className="relative">
                            <input
                                type="password"
                                required
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                className="w-full bg-black border border-gray-700 rounded-sm py-3 pl-10 pr-4 text-white focus:border-primary focus:outline-none"
                            />
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-400 mb-1">Confirmar Contraseña</label>
                        <div className="relative">
                            <input
                                type="password"
                                required
                                value={formData.confirmPassword}
                                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                className="w-full bg-black border border-gray-700 rounded-sm py-3 pl-10 pr-4 text-white focus:border-primary focus:outline-none"
                            />
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        </div>
                    </div>

                    <button type="submit" className="w-full bg-primary text-black py-3 rounded-sm font-bold text-sm uppercase hover:bg-yellow-400 transition-colors mt-4">
                        Registrarse
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-500">
                    ¿Ya tienes cuenta? <Link to="/login" className="text-primary hover:text-yellow-300 font-bold">Inicia Sesión</Link>
                </div>
            </div>
        </div>
    );
}
