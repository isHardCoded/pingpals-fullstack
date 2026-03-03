import { createBrowserRouter } from 'react-router';
import { lazy } from 'react';
import { MainLayout } from '../../components/layouts/main/MainLayout';
import { AuthGuard } from '../../shared/components/AuthGuard';
import { ProtectedGuard } from '../../shared/components/ProtectedGuard';

import NotFound from '../../pages/not-found/NotFound';
const Home = lazy(() => import('../../pages/home/Home'));
const Profile = lazy(() => import('../../pages/profile/Profile'));
const Auth = lazy(() => import('../../pages/auth/Auth'));

import { ROUTES } from '../../shared/config/routes';

export const router = createBrowserRouter([
  {
    element: (
      <ProtectedGuard>
        <MainLayout />
      </ProtectedGuard>
    ),
    errorElement: <NotFound />,
    children: [
      { path: ROUTES.HOME, element: <Home /> },
      { path: ROUTES.PROFILE, element: <Profile /> },
    ],
  },
  {
    path: ROUTES.AUTH,
    element: (
      <AuthGuard>
        <Auth />
      </AuthGuard>
    ),
  },
  { path: '*', element: <NotFound /> },
]);
