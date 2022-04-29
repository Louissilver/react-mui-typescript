import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDrawerContext } from '../shared/contexts';
import { Dashboard, ListagemDePessoa } from '../pages';

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
        icon: 'location_city',
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
      <Route
        path="/pagina-inicial"
        element={<Dashboard>Página inicial</Dashboard>}
      />
      {/* <Route path="/cidades" element={<ListagemDePessoa />} /> */}
      {/* <Route
        path="/cidades/detalhe/:id"
        element={<ListagemDeCidade></ListagemDeCidade>}
      /> */}
      <Route path="/pessoas" element={<ListagemDePessoa />} />
      <Route path="*" element={<Navigate to="/pagina-inicial"></Navigate>} />
    </Routes>
  );
};
