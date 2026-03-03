import { Navigate } from 'react-router';
import { ROUTES } from '../config/routes';

interface ProtectedGuardProps {
  children: React.ReactNode;
}

export const ProtectedGuard = ({ children }: ProtectedGuardProps) => {
  const isAuthenticated = localStorage.getItem('access_token') !== null;

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.AUTH} replace />;
  }

  return <>{children}</>;
};
