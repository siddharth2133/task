"use client"
import { useForm } from 'react-hook-form';
import { useRegisterUserMutation } from '../../redux/apiSlice';
import { useRouter } from 'next/navigation';
import { Box, Button, Grid, TextField, Typography, Paper } from '@mui/material';
import { login } from '@/redux/authSlice';
import { useDispatch } from 'react-redux';

export default function RegisterPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [registerUser, { isLoading }] = useRegisterUserMutation();
    const router = useRouter();
    const dispatch = useDispatch();

    const onSubmit = async (data) => {
        try {
            const response = await registerUser(data).unwrap();
            const { token, id: userId } = response;
            dispatch(login({ token, userId }));
            alert('Registration Successful! Redirecting to the dashboard...');
            router.push('/dashboard');
        } catch (error) {
            alert(error?.data?.error || 'Registration failed');
        }
    };

    return (
        <Grid container justifyContent="center" alignItems="center" sx={{ height: '100vh', backgroundColor: '#f4f7fc' }}>
            <Paper elevation={8} sx={{ width: 400, p: 4, borderRadius: '12px', backgroundColor: '#fff' }}>
                <Typography variant="h4" mb={3} align="center" fontWeight="bold" color="#4caf50">Create Account</Typography>
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
                        {isLoading ? 'Registering...' : 'Register'}
                    </Button>
                    <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                        Already have an account?{' '}
                        <Button
                            color="primary"
                            sx={{ textTransform: 'none' }}
                            onClick={() => router.push('/login')}
                        >
                            Log In
                        </Button>
                    </Typography>
                </form>
            </Paper>
        </Grid>
    );
}
