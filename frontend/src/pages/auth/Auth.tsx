import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../../components/ui/button/Button';
import { Input } from '../../components/ui/input/Input';
import { AuthService } from '../../services/auth';
import { ROUTES } from '../../shared/config/routes';
import s from './styles.module.css';

type AuthMode = 'login' | 'register';

interface FormData {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

interface FormErrors {
  username?: string;
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  general?: string;
}

const Auth = () => {
  const [mode, setMode] = useState<AuthMode>('login');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const navigate = useNavigate();

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (mode === 'register') {
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        newErrors.email = 'Invalid email format';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    if (!validate()) {
      return;
    }

    setIsLoading(true);

    try {
      if (mode === 'login') {
        const response = await AuthService.login({
          username: formData.username,
          password: formData.password,
        });

        localStorage.setItem('access_token', response.accessToken);
        navigate(ROUTES.HOME);
      } else {
        await AuthService.register({
          username: formData.username,
          email: formData.email,
          password: formData.password,
          firstName: formData.firstName || undefined,
          lastName: formData.lastName || undefined,
        });

        const response = await AuthService.login({
          username: formData.username,
          password: formData.password,
        });

        localStorage.setItem('access_token', response.accessToken);
        navigate(ROUTES.HOME);
      }
    } catch (error) {
      setErrors({
        general:
          error instanceof Error ? error.message : 'Authentication failed',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: keyof FormData) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const toggleMode = () => {
    setMode(mode === 'login' ? 'register' : 'login');
    setErrors({});
    setFormData({
      username: '',
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    });
  };

  return (
    <div className={s.container}>
      <div className={s.card}>
        <h1 className={s.title}>
          {mode === 'login' ? 'Welcome Back' : 'Create Account'}
        </h1>
        <p className={s.subtitle}>
          {mode === 'login'
            ? 'Sign in to continue to PingPals'
            : 'Register to get started'}
        </p>

        {errors.general && (
          <div className={s.errorGeneral}>{errors.general}</div>
        )}

        <form onSubmit={handleSubmit} className={s.form}>
          <Input
            name="username"
            label="Username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleInputChange('username')}
            error={errors.username}
            disabled={isLoading}
          />

          {mode === 'register' && (
            <>
              <Input
                name="email"
                type="email"
                label="Email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange('email')}
                error={errors.email}
                disabled={isLoading}
              />

              <div className={s.nameRow}>
                <Input
                  name="firstName"
                  label="First Name"
                  placeholder="Optional"
                  value={formData.firstName}
                  onChange={handleInputChange('firstName')}
                  error={errors.firstName}
                  disabled={isLoading}
                />

                <Input
                  name="lastName"
                  label="Last Name"
                  placeholder="Optional"
                  value={formData.lastName}
                  onChange={handleInputChange('lastName')}
                  error={errors.lastName}
                  disabled={isLoading}
                />
              </div>
            </>
          )}

          <Input
            name="password"
            type="password"
            label="Password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleInputChange('password')}
            error={errors.password}
            disabled={isLoading}
          />

          <Button type="submit" appearance="primary" disabled={isLoading}>
            {isLoading
              ? mode === 'login'
                ? 'Signing in...'
                : 'Creating account...'
              : mode === 'login'
                ? 'Sign In'
                : 'Sign Up'}
          </Button>
        </form>

        <div className={s.footer}>
          <span>
            {mode === 'login'
              ? "Don't have an account?"
              : 'Already have an account?'}
          </span>
          <Button appearance="link" onClick={toggleMode} disabled={isLoading}>
            {mode === 'login' ? 'Sign Up' : 'Sign In'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
