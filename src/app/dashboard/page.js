"use client"
import { useFetchUsersQuery } from '../../redux/apiSlice';
import { Grid, Card, Typography, CardContent, Button, Paper, Avatar, Container } from '@mui/material';
import { useRouter } from 'next/navigation';
import PrivateRoute from '../../components/privateRoute';
import { logout } from '@/redux/authSlice';
import { useDispatch } from 'react-redux';

export default function DashboardPage() {
    const { data, error, isLoading } = useFetchUsersQuery(1);
    const router = useRouter();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        alert('Logged out successfully');
        router.push('/login');
    };

    if (isLoading) return <Typography>Loading...</Typography>;
    if (error) return <Typography>Error fetching users</Typography>;

    return (
        <PrivateRoute>
            <Container maxWidth="xl" sx={{ paddingTop: 4, paddingBottom: 4 }}>
                <Grid container spacing={3} p={4} sx={{ backgroundColor: '#f4f7fc' }}>
                    <Grid item xs={12} sx={{ textAlign: 'right' }}>
                        <Button
                            variant="contained"
                            color="error"
                            onClick={handleLogout}
                            sx={{
                                backgroundColor: '#ff4d4d',
                                '&:hover': {
                                    backgroundColor: '#ff2a2a',
                                },
                                borderRadius: '8px',
                                padding: '8px 16px',
                            }}
                        >
                            Logout
                        </Button>
                    </Grid>
                    {data.data.map((user) => (
                        <Grid item xs={12} sm={6} md={4} key={user.id}>
                            <Paper elevation={6} sx={{ borderRadius: '16px', backgroundColor: '#fff', padding: 2 }}>
                                <Card sx={{ borderRadius: '12px' }}>
                                    <CardContent>
                                        <Grid container spacing={2} alignItems="center">
                                            <Grid item>
                                                <Avatar sx={{ bgcolor: '#4caf50', width: 56, height: 56 }}>
                                                    {user.first_name[0].toUpperCase()}
                                                </Avatar>
                                            </Grid>
                                            <Grid item xs>
                                                <Typography variant="h6" fontWeight="bold">
                                                    {user.first_name} {user.last_name}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary">
                                                    {user.email}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </PrivateRoute>
    );
}
