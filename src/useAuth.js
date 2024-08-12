// useAuth.js

import { useAtom } from 'jotai';
import { userAtom } from './atoms';

export const useAuth = () => {
    const [user, setUser] = useAtom(userAtom);

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
            setUser(result.user);
            localStorage.setItem('token', result.token);
        } else {
            throw new Error('Invalid credentials');
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
    };

    return {
        user,
        login,
        logout,
        isAuthenticated: !!user,
    };
};