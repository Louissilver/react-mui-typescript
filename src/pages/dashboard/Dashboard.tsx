import { FerramentasDaListagem } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts/LayoutBaseDePagina';

export const Dashboard = () => {
  return (
    <LayoutBaseDePagina
      titulo="Página inicial"
      ferramentasDaListagem={<FerramentasDaListagem mostrarInputBusca />}
    >
      Testando
    </LayoutBaseDePagina>
  );
};
