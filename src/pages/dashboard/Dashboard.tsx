import { FerramentasDeDetalhe } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts/LayoutBaseDePagina';

export const Dashboard: React.FC = ({ children }) => {
  return (
    <LayoutBaseDePagina
      titulo="Página inicial"
      ferramentasDaListagem={<FerramentasDeDetalhe mostrarBotaoSalvarEVoltar />}
    >
      {children}
    </LayoutBaseDePagina>
  );
};
