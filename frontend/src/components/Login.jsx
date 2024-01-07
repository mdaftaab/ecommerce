import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync } from '../redux/slices/authSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { Redirect } from 'react-router-dom';

const Login = ({ history }) => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const resultAction = await dispatch(loginAsync(formData));
            unwrapResult(resultAction);
            history.push('/dashboard');
        } catch (error) {
            console.error(error);
            // Handle error, if needed
        }
    };

    if (isAuthenticated) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                {/* ... */}
            </form>
        </div>
    );
};

export default Login;
