import { createTheme } from '@mui/material/styles';

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: { main: '#1976d2' },
      background: { default: mode === 'dark' ? '#121212' : '#fafafa' },
    },
    typography: {
      fontFamily: "'Poppins', sans-serif",
    },
  });
