import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import { Button, } from "@mui/material";
import * as yup from 'yup';
import { Formik } from 'formik';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import Footer from "../components/Footer";

const theme = createTheme();
const ariaLabel = { 'aria-label': 'description' };

const initialFormValue = {
  email: '',
  password: '',
};

const Login = () => {
  const navigate = useNavigate();
  const [showPassword] = useState('');
  const handleSubmit = ({ email, password }, formikHelpers) => {
    navigate('/home');
  };

  const back = () => {
    navigate('/');
  }


  return (
    <div>
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url(https://cdn.pixabay.com/photo/2015/09/05/23/02/notepad-926046__340.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />


          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >

              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>

              <Formik
                initialValues={initialFormValue}
                onSubmit={handleSubmit}
                validationSchema={yup.object().shape({
                  email: yup.string().required('Email is required').email('Should be a valid Email'),
                  password: yup.string()
                    .required('Password is required')
                    .min(8, 'Passwword must be atleast 8 characters'),
                })}
              >
                {({ values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
                  <form onSubmit={handleSubmit} style={{ marginBottom: 50, }}>
                    <Input inputProps={ariaLabel}
                      style={{ marginTop: 40 }}
                      error={Boolean(touched.email && errors.email)}
                      helperText={touched.email && errors.email}
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      variant="outlined"
                      labeldisplay={false}
                      labelValue="E-mail"
                      name="email"
                      type="email"
                      placeholder="Email"
                      textalignment="left"
                      size="small"
                      margin="normal"
                      fullWidth
                      autoFocus

                    />
                    <Input inputProps={ariaLabel}
                      style={{ marginTop: 40 }}
                      error={Boolean(touched.password && errors.password)}
                      helperText={touched.password && errors.password}
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      variant="outlined"
                      labeldisplay={false}
                      labelValue="Password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password"
                      textalignment="left"
                      size="small"
                      margin="normal"
                      fullWidth

                    />

                    {isSubmitting ? (
                      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}>

                        <Alert severity="success" color="info">
                          Successfully Signed In
                        </Alert>
                      </div>
                    ) : (
                      <Button
                        style={{ marginTop: 30 }}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        disabled={isSubmitting}
                        onSubmit={handleSubmit}
                        onClick={() => {
                          localStorage.setItem('token', 'tested')
                          localStorage.setItem('username', values.email)
                        }}

                      >
                        Login
                      </Button>
                    )}
                  </form>
                )}
              </Formik>
            </Box>
            <div className='b1'>
              <Button variant="contained" onClick={() => back()}>Back</Button>
            </div>
          </Grid>
        </Grid>
      </ThemeProvider>
      <Footer />
    </div>
  )
};

export default Login;
