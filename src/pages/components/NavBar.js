import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';

export default function NavBar() {
  const loginStore = useSelector((state) => state.login);
  const status = loginStore.length;
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    router.push('/components/SignIn');
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" flexGrow={1}>
          todoist
        </Typography>
        <Button
          variant="text"
          color="inherit"
          startIcon={status ? <LogoutIcon /> : <LoginIcon />}
          onClick={handleLogin}
        >
          {status ? 'Log out' : 'Log in'}
        </Button>
      </Toolbar>
    </AppBar>
  );
}
