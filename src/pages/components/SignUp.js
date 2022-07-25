import * as React from 'react';
import {
  Avatar,
  Alert,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addForm } from '../../redux/registration/signUp';
import { useRouter } from 'next/router';
import { Link } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const theme = createTheme();

export default function SignUp() {
  const [error, seterror] = useState('');
  const formStore = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const router = useRouter();
  const id = uuidv4();


  // submit the signup form
  const handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, email, password } = event.target.elements;
    const emails = email.value;
    const passwords = password.value;

    const value = formStore.find(
      (elem) => elem.email === emails && elem.password === passwords
    );
    if (value) {
      seterror('Already Registered');
    } else {
      seterror('Successfully Registered');
      dispatch(
        addForm(
          id,
          firstName.value,
          lastName.value,
          email.value,
          password.value
        )
      );
      router.push('/components/SignIn');
    }

    firstName.value = '';
    lastName.value = '';
    email.value = '';
    password.value = '';
  };

  //for validation
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
      password: Yup.string()
        .min(6, 'Password must be atlease 6 characters')
        .required('Password is required'),
    }),
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          {error ? (
            <Alert
              severity={error === 'Already Registered' ? 'error' : 'success'}
            >
              {error}
            </Alert>
          ) : (
            ''
          )}
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstName"
                  required
                  fullWidth
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Last Name"
                  name="lastName"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Email Address"
                  name="email"
                  onChange={formik.handleChange}
                  error={formik.errors.email && Boolean(formik.errors.email)}
                  onBlur={formik.handleBlur}
                  helperText={formik.errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  onChange={formik.handleChange}
                  error={
                    formik.errors.password && Boolean(formik.errors.password)
                  }
                  onBlur={formik.handleBlur}
                  helperText={formik.errors.password}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/components/SignIn" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
