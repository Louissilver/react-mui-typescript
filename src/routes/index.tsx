import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDrawerContext } from '../shared/contexts';
import {
  Dashboard,
  ListagemDePessoa,
  DetalheDePessoas,
  ListagemDeCidade,
  DetalheDeCidades,
} from '../pages';

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
      <Route path="/cidades" element={<ListagemDeCidade />} />
      <Route path="/cidades/detalhe/:id" element={<DetalheDeCidades />} />

      <Route path="/pessoas" element={<ListagemDePessoa />} />
      <Route path="/pessoas/detalhe/:id" element={<DetalheDePessoas />} />

      <Route path="*" element={<Navigate to="/pagina-inicial"></Navigate>} />
    </Routes>
  );
};
