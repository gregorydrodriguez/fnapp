// components/ProtectedRoute.js

import { useAtomValue } from 'jotai';
import { isAuthenticatedAtom } from '@/atoms';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAtomValue(isAuthenticatedAtom);
  const router = useRouter();

  useEffect(() => {
    console.log('isAuthenticated: ', isAuthenticated);
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  return children;
};

export default ProtectedRoute;