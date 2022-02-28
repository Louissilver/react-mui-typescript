import { Routes, Route, Navigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { useAppThemecontext, useDrawerContext } from '../shared/contexts';

export const AppRoutes = () => {
  const { toggleTheme } = useAppThemecontext();
  const { toggleDrawerOpen } = useDrawerContext();
  return (
    <Routes>
      <Route
        path="/pagina-inicial"
        element={
          <>
            <Button
              variant="contained"
              color="secondary"
              onClick={toggleDrawerOpen}
            >
              Toggle drawer
            </Button>
            <Button variant="contained" color="primary" onClick={toggleTheme}>
              Toggle theme
            </Button>
          </>
        }
      />
      <Route path="*" element={<Navigate to="/pagina-inicial"></Navigate>} />
    </Routes>
  );
};
