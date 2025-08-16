import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from "./providers/AuthProvider.tsx";
import HomePage from "./pages/HomePage.tsx";
import AuthPage from "./pages/AuthPage.tsx";

createRoot(document.getElementById('root')!).render(
    <AuthProvider>
        <Router>
            <Routes>
                <Route path={'/'} element={<HomePage />} />
                <Route path={'/login'} element={<AuthPage type='login' />} />
                <Route path={'/register'} element={<AuthPage type='register' />} />
            </Routes>
        </Router>
    </AuthProvider>
)
