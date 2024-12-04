'use client';

import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const PrivateRoute = ({ children }) => {
    const { token } = useSelector((state) => state.auth);
    const router = useRouter();
    console.log(token)

    useEffect(() => {
        if (!token) {
            // Redirect to login or register if not authenticated
            router.push('/login');
        }
    }, [token, router]);

    // Render children only if authenticated
    return token ? children : null;
};

export default PrivateRoute;
