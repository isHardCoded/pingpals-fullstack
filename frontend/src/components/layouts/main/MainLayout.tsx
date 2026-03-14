import { Outlet } from 'react-router';
import { Suspense } from 'react';
import { Header } from '../header/Header';
import { Aside } from '../aside/Aside';
import s from './styles.module.css';

export const MainLayout = () => {
  return (
    <div className={s.layout}>
      <Header />
      <div className={s.content}>
        <Aside />
        <main className={s.main}>
          <Suspense fallback={<div className={s.loader}>Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </div>
  );
};
