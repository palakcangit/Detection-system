import { Container, Paper, Avatar, Typography } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { LoginForm } from '../components/Auth/LoginForm';

export const LoginPage = () => {
  const handleLogin = (data: { email: string; password: string }) => {
    console.log('Login data:', data);
    // TODO: Connect to backend
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <LoginForm onSubmit={handleLogin} />
      </Paper>
    </Container>
  );
};