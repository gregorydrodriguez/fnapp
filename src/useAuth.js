// src/useAuth.js

import { useAtom } from 'jotai';
import { userAtom, isAuthenticatedAtom } from './atoms';

export const useAuth = () => {
    const [user, setUser] = useAtom(userAtom);
    const [isAuthenticated] = useAtom(isAuthenticatedAtom);

    const login = async (data) => {
        const response = await fetch('/api/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const result = await response.json();
            console.log('Login successful:', result);
            setUser(result.user);
            localStorage.setItem('token', result.token);
        } else {
            const error = await response.json();
            throw new Error(error.error || 'Invalid credentials');
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
        window.location.href = '/';
    };
    
    return {
        user,
        login,
        logout,
        isAuthenticated,
    };
};