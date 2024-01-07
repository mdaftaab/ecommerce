import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for login
export const loginAsync = createAsyncThunk('auth/login', async (userData) => {
    const response = await axios.post('http://localhost:5000/api/auth/login', userData);
    return response.data;
});

// Async thunk for registration
export const registerAsync = createAsyncThunk('auth/register', async (userData) => {
    const response = await axios.post('http://localhost:5000/api/auth/register', userData);
    return response.data;
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: !!localStorage.getItem('token'),
        userId: null,
        status: 'idle',
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.isAuthenticated = false;
            state.userId = null;
            localStorage.removeItem('token');
        },
    },
    extraReducers: (builder) => {
        // ...
        builder.addCase(loginAsync.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });

        builder.addCase(registerAsync.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
