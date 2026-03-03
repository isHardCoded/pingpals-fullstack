import { Navigate } from 'react-router';
import { ROUTES } from '../config/routes';

interface AuthGuardProps {
  children: React.ReactNode;
}

export const AuthGuard = ({ children }: AuthGuardProps) => {
  const isAuthenticated = localStorage.getItem('access_token') !== null;

  if (isAuthenticated) {
    return <Navigate to={ROUTES.HOME} replace />;
  }

  return <>{children}</>;
};
