import React from 'react';
import { userService } from "../../../services/UserService.ts";
import { useNavigate } from "react-router-dom";

import styles from './Auth.module.scss'

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex } from 'antd';

const RegisterForm = () => {
    const [username, setUsername] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
    const [error, setError] = React.useState<string | null>(null)
    const [loading, setLoading] = React.useState<boolean>(false);

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {

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

    return <Form
        name="login"
        initialValues={{ remember: true }}
        style={{ maxWidth: 360 }}
        onFinish={handleSubmit}
        className={styles.form}
    >
        <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
        >
            <Input prefix={<UserOutlined />} placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </Form.Item>
        <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
        >
            <Input prefix={<LockOutlined />} type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Item>
        <Form.Item>
            <Flex justify="space-between" align="center">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <a href="">Forgot password</a>
            </Flex>
        </Form.Item>

        <Form.Item>
            <Button block type="primary" htmlType="submit">
                Log in
            </Button>
        </Form.Item>
    </Form>

    // return <form onSubmit={handleSubmit} className={styles.form}>
    //     <div>
    //
    //         <label htmlFor="username">Username</label>
    //         <input type="text" placeholder="Username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
    //     </div>
    //     <div>
    //         <label htmlFor="password">Password</label>
    //         <input type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    //     </div>
    //     <a href='#'>Forgot password?</a>
    //     <Button color="black" variant="solid" onClick={handleSubmit}>Sign Up</Button>
    //     {error && <p className={styles.error}>{error}</p>}
    // </form>

}

export default RegisterForm;