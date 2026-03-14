import { Link } from 'react-router';
import { ROUTES } from '../../../shared/config/routes';
import s from './styles.module.css';

const navItems = [
  { label: '🏠 Home', path: ROUTES.HOME },
  { label: '👤 Profile', path: ROUTES.PROFILE.replace(':id', 'me') },
  { label: '💬 Messages', path: '#' },
  { label: '🔔 Notifications', path: '#' },
  { label: '⚙️ Settings', path: '#' },
];

export const Aside = () => {
  return (
    <aside className={s.aside}>
      <nav className={s.nav}>
        {navItems.map((item) => (
          <Link key={item.path} to={item.path} className={s.navLink}>
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};
