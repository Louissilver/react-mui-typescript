import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import BarraDeAplicativos from './shared/components/barra-de-aplicativos/BarraDeAplicativos';
import { Rodape } from './shared/components/rodape/Rodape';
import { AppThemeProvider } from './shared/contexts/ThemeContext';

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <BarraDeAplicativos>
          <AppRoutes />
          <Rodape />
        </BarraDeAplicativos>
      </BrowserRouter>
    </AppThemeProvider>
  );
};
