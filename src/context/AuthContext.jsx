import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check local storage for persisted user
        const storedUser = localStorage.getItem('dreamlike_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = (email, password) => {
        // Mock login logic
        if (email === 'admin@dreamlike.cl' && password === 'admin123') {
            const userData = {
                name: 'Administrador Demo',
                email: email,
                role: 'admin',
                company: 'Dreamlike Industrial SpA'
            };
            setUser(userData);
            localStorage.setItem('dreamlike_user', JSON.stringify(userData));
            return { success: true };
        }

        if (email === 'cliente@dreamlike.cl' && password === 'cliente123') {
            const userData = {
                name: 'Juan Pérez',
                email: email,
                role: 'client',
                company: 'Constructora del Sur'
            };
            setUser(userData);
            localStorage.setItem('dreamlike_user', JSON.stringify(userData));
            return { success: true };
        }

        return { success: false, error: 'Credenciales inválidas. Prueba: admin@dreamlike.cl / admin123 o cliente@dreamlike.cl / cliente123' };
    };

    const register = (userData) => {
        // Mock register logic
        const newUser = {
            ...userData,
            role: 'client'
        };
        setUser(newUser);
        localStorage.setItem('dreamlike_user', JSON.stringify(newUser));
        return { success: true };
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('dreamlike_user');
    };

    const value = {
        user,
        login,
        register,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
