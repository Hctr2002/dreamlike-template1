import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { Zap, Lock, Mail } from 'lucide-react';

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const result = login(email, password);
        if (result.success) {
            navigate('/dashboard');
        } else {
            setError(result.error);
        }
    };

    return (
        <div className="min-h-screen pt-20 flex items-center justify-center bg-background px-4">
            <div className="max-w-md w-full bg-gray-900 border border-gray-800 rounded-sm p-8">
                <div className="flex justify-center mb-6">
                    <div className="bg-primary p-2 rounded-sm">
                        <Zap className="w-8 h-8 text-black fill-black" />
                    </div>
                </div>

                <h2 className="text-3xl font-heading font-bold text-center text-white mb-2 uppercase">Iniciar Sesión</h2>
                <p className="text-gray-400 text-center mb-8 text-sm">Accede a tu cuenta profesional</p>

                {error && (
                    <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-sm mb-6 text-sm text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-gray-400 mb-1">Email Corporativo</label>
                        <div className="relative">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-black border border-gray-700 rounded-sm py-3 pl-10 pr-4 text-white focus:border-primary focus:outline-none"
                                placeholder="nombre@empresa.com"
                            />
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-400 mb-1">Contraseña</label>
                        <div className="relative">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-black border border-gray-700 rounded-sm py-3 pl-10 pr-4 text-white focus:border-primary focus:outline-none"
                                placeholder="••••••••"
                            />
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        </div>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                        <label className="flex items-center gap-2 text-gray-400 cursor-pointer">
                            <input type="checkbox" className="rounded bg-black border-gray-700 text-primary focus:ring-primary" />
                            Recordarme
                        </label>
                        <a href="#" className="text-primary hover:text-yellow-300">¿Olvidaste tu contraseña?</a>
                    </div>

                    <button type="submit" className="w-full bg-primary text-black py-3 rounded-sm font-bold text-sm uppercase hover:bg-yellow-400 transition-colors">
                        Ingresar
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-500">
                    ¿No tienes cuenta? <Link to="/registro" className="text-primary hover:text-yellow-300 font-bold">Regístrate aquí</Link>
                </div>

                <div className="mt-4 p-3 bg-gray-800 rounded-sm text-xs text-gray-400 text-center space-y-1">
                    <div><span className="font-bold text-white">Admin:</span> admin@dreamlike.cl / admin123</div>
                    <div><span className="font-bold text-white">Cliente:</span> cliente@dreamlike.cl / cliente123</div>
                </div>
            </div>
        </div>
    );
}
