import { Container } from '@mui/system';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import HeroSec from './components/HeroSec';
import NavBar from './components/Navbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#864313',
    },
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Todos</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicons.ico" />
      </Head>
        <NavBar />
      <Container>
        <HeroSec />
      </Container>

    </ThemeProvider>
  );
}