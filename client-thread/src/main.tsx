import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage.tsx'
import RegisterPage from './pages/RegisterPage.tsx'
import LoginPage from './pages/LoginPage.tsx'
import { PAGES } from './shared/config/Pages.config.ts'

createRoot(document.getElementById('root')!).render(
	<Router>
		<Routes>
			<Route path={PAGES.HOME} element={<HomePage />} />
			<Route path={PAGES.SIGN_IN} element={<LoginPage />} />
			<Route path={PAGES.SIGN_UP} element={<RegisterPage />} />
		</Routes>
	</Router>
)
