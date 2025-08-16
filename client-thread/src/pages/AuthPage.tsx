import LoginForm from "../components/elements/Auth/LoginForm.tsx";
import RegisterForm from "../components/elements/Auth/RegisterForm.tsx";

interface AuthPageProps {
    type: string;
}

const AuthPage = ({ type }: AuthPageProps) => {

    if (type === "login") {
        return <>
                <div style={{
                    maxWidth: 400,
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    height: "100vh",
                    margin: "0 auto",
                }}>
                <h2 style={{ color: '#0C1421' }}>Login</h2>
                <LoginForm />
            </div>
        </>
    }

    return <>
            <div style={{
                maxWidth: 400,
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                height: "100vh",
                margin: "0 auto",
            }}>
                <h2 style={{ color: '#0C1421' }}>Sign Up</h2>
                <RegisterForm />
            </div>
        </>
}

export default AuthPage