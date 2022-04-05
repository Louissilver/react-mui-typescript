import { createTheme } from '@mui/material';
import { cyan, indigo } from '@mui/material/colors';

export const LightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0099CC',
      dark: cyan[900],
      light: cyan[500],
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#091C48',
      dark: indigo[400],
      light: indigo[300],
      contrastText: '#ffffff',
    },
    background: {
      paper: '#d0d0d0',
      default: '#ffffff',
    },
  },
  typography: {
    allVariants: {
      color: '#ffffff',
    },
  },
});
