import React from 'react';
import { userService } from "../../../services/UserService.ts";
import { useNavigate } from "react-router-dom";

import styles from './Auth.module.scss'
import { PulseLoader } from "react-spinners";

const RegisterForm = () => {
    const [username, setUsername] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
    const [error, setError] = React.useState<string | null>(null)
    const [loading, setLoading] = React.useState<boolean>(false);

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setLoading(true);

        setTimeout(async () => {
            try {
                await userService.register({ username, password });
                navigate("/login");
                setError(null);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError('Something went wrong');
                }
            } finally {
                setLoading(false);
            }
        }, 1500);
    };


    return <form onSubmit={handleSubmit} className={styles.form}>
        <div>
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <a href='#'>Forgot password?</a>
        <button type="submit"> {loading && <span><PulseLoader color={"#FFFFFF"} size={5} /></span>} <p>Sign Up</p></button>
        {error && <p className={styles.error}>{error}</p>}
    </form>

}

export default RegisterForm;