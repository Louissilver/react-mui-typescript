import { ReactNode } from 'react';
import {
  Typography,
  useTheme,
  IconButton,
  Icon,
  useMediaQuery,
} from '@mui/material';
import { Box } from '@mui/system';
import { useDrawerContext } from '../contexts';

interface ILayoutBaseDePaginaProps {
  titulo: string;
  ferramentasDaListagem?: ReactNode;
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = ({
  children,
  titulo,
  ferramentasDaListagem,
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box
        display="flex"
        alignItems="center"
        padding={1}
        gap={1}
        height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}
      >
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}
        <Typography
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
          component="h1"
          variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'}
        >
          {titulo}
        </Typography>
      </Box>
      {ferramentasDaListagem && <Box>{ferramentasDaListagem}</Box>}
      <Box flex={1} overflow="auto">
        {children}
      </Box>
    </Box>
  );
};
