"use client"
import { useForm } from 'react-hook-form';
import { useLoginUserMutation } from '../../redux/apiSlice';
import { useRouter } from 'next/navigation';
import { Box, Button, Grid, TextField, Typography, Paper } from '@mui/material';
import { login } from '@/redux/authSlice';
import { useDispatch } from 'react-redux';

export default function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loginUser, { isLoading }] = useLoginUserMutation();
    const router = useRouter();
    const dispatch = useDispatch();

    const onSubmit = async (data) => {
        try {
            const response = await loginUser(data).unwrap();
            const { token } = response;
            dispatch(login({ token, userId: null }));
            alert('Login Successful!');
            router.push('/dashboard');
        } catch (error) {
            alert(error?.data?.error || 'Login failed');
        }
    };

    return (
        <Grid container justifyContent="center" alignItems="center" sx={{ height: '100vh', backgroundColor: '#f4f7fc' }}>
            <Paper elevation={8} sx={{ width: 400, p: 4, borderRadius: '12px', backgroundColor: '#fff' }}>
                <Typography variant="h4" mb={3} align="center" fontWeight="bold" color="#4caf50">Welcome Back</Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        fullWidth
                        label="Email"
                        {...register('email', { required: 'Email is required' })}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        margin="normal"
                        sx={{ borderRadius: '8px', backgroundColor: '#fafafa' }}
                    />
                    <TextField
                        fullWidth
                        type="password"
                        label="Password"
                        {...register('password', { required: 'Password is required' })}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                        margin="normal"
                        sx={{ borderRadius: '8px', backgroundColor: '#fafafa' }}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        type="submit"
                        disabled={isLoading}
                        sx={{
                            mt: 3,
                            backgroundColor: '#4caf50',
                            color: '#fff',
                            '&:hover': {
                                backgroundColor: '#45a049'
                            },
                            borderRadius: '8px',
                            padding: '12px'
                        }}
                    >
                        {isLoading ? 'Logging in...' : 'Login'}
                    </Button>
                    <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                        Don't have an account?{' '}
                        <Button
                            color="primary"
                            sx={{ textTransform: 'none' }}
                            onClick={() => router.push('/register')}
                        >
                            Register
                        </Button>
                    </Typography>
                </form>
            </Paper>
        </Grid>
    );
}
