import { createTheme } from '@mui/material';
import { cyan, teal } from '@mui/material/colors';

export const LightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: teal[800],
      dark: teal[900],
      light: teal[500],
      contrastText: '#ffffff',
    },
    secondary: {
      main: cyan[500],
      dark: cyan[400],
      light: cyan[300],
      contrastText: '#ffffff',
    },
    background: {
      paper: teal[400],
      default: teal[100],
    },
  },
  typography: {
    allVariants: {
      color: teal[900],
    },
  },
});
