import { createTheme } from '@mui/material';
import { cyan, indigo } from '@mui/material/colors';

export const LightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: indigo[800],
      dark: indigo[900],
      light: indigo[500],
      contrastText: '#ffffff',
    },
    secondary: {
      main: cyan[500],
      dark: cyan[400],
      light: cyan[300],
      contrastText: '#ffffff',
    },
    background: {
      paper: '#d0d0d0',
      default: '#ffffff',
    },
  },
  typography: {
    allVariants: {
      color: indigo[900],
    },
  },
});
