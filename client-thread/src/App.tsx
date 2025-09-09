import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.tsx'
import RegisterPage from './pages/RegisterPage.tsx'
import LoginPage from './pages/LoginPage.tsx'
import { PAGES } from './shared/config/Pages.config.ts'

export default function App() {
	return (
		<Routes>
			<Route path={PAGES.HOME} element={<HomePage />} />
			<Route path={PAGES.SIGN_IN} element={<LoginPage />} />
			<Route path={PAGES.SIGN_UP} element={<RegisterPage />} />
		</Routes>
	)
}
