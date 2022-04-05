import { FerramentasDeDetalhe } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts/LayoutBaseDePagina';

export const Dashboard: React.FC = ({ children }) => {
  return (
    <LayoutBaseDePagina
      titulo="Página inicial"
      barraDeFerramentas={<FerramentasDeDetalhe mostrarBotaoSalvarEVoltar />}
    >
      {children}
    </LayoutBaseDePagina>
  );
};
