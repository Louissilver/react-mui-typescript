import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDrawerContext } from '../shared/contexts';
import { Dashboard } from '../pages';

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        label: 'Página inicial',
        path: 'pagina-inicial',
        icon: 'home',
      },
      {
        label: 'Cidades',
        path: 'cidades',
        icon: 'map',
      },
      {
        label: 'Pessoas',
        path: 'pessoas',
        icon: 'person',
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/pagina-inicial"></Navigate>} />
    </Routes>
  );
};
