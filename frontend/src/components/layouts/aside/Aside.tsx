import { Link } from 'react-router';
import { Home, User, MessageSquare, Bell, Settings } from 'lucide-react';
import { ROUTES } from '../../../shared/config/routes';
import s from './styles.module.css';

const navItems = [
  { label: 'Home', icon: Home, path: ROUTES.HOME },
  { label: 'Profile', icon: User, path: ROUTES.PROFILE.replace(':id', 'me') },
  { label: 'Messages', icon: MessageSquare, path: '/messages' },
  { label: 'Notifications', icon: Bell, path: '/notifications' },
  { label: 'Settings', icon: Settings, path: '/settings' },
];

export const Aside = () => {
  return (
    <aside className={s.aside}>
      <nav className={s.nav}>
        {navItems.map((item) => (
          <Link key={item.path} to={item.path} className={s.navLink}>
            <item.icon size={20} />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};
