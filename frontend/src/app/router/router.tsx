import { createBrowserRouter } from 'react-router';
import { lazy } from 'react';
import { MainLayout } from '../../components/layouts/main/MainLayout';

import NotFound from '../../pages/not-found/NotFound';
const Home = lazy(() => import('../../pages/home/Home'));
const Profile = lazy(() => import('../../pages/profile/Profile'));

import { ROUTES } from '../../shared/config/routes';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { path: ROUTES.HOME, element: <Home /> },
      { path: ROUTES.PROFILE, element: <Profile /> },
    ],
  },
  { path: '*', element: <NotFound /> },
]);
