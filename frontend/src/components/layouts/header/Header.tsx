import { Link, useNavigate } from 'react-router';
import { ROUTES } from '../../../shared/config/routes';
import { Button } from '../../ui/button/Button';
import s from './styles.module.css';

export const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    navigate(ROUTES.AUTH);
  };

  return (
    <header className={s.header}>
      <div className={s.container}>
        <Link to={ROUTES.HOME} className={s.logo}>
          <span className={s.logoIcon}>🏓</span>
          <span className={s.logoText}>PingPals</span>
        </Link>

        <div className={s.search}>
          <input
            type="text"
            placeholder="Search..."
            className={s.searchInput}
          />
        </div>

        <div className={s.actions}>
          <Link to={ROUTES.HOME}>
            <Button appearance="secondary">Home</Button>
          </Link>
          <Button appearance="primary" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
};
