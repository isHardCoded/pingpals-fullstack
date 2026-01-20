import { Outlet } from 'react-router';
import { Suspense } from 'react';

import s from './styles.module.css';

export const MainLayout = () => {
  return (
    <div className={s.layout}>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
