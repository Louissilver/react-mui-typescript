import { useTheme, useMediaQuery, Container } from '@mui/material';
import { Box } from '@mui/system';
import { Rodape } from '../components/rodape/Rodape';

export const LayoutBaseDePagina: React.FC = ({ children }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Box
      maxWidth="100%"
        sx={{
          
        }}
      >
        <Container maxWidth={smDown ? 'sm' : mdDown ? 'md' : 'lg'}>
          <Box
            overflow="auto"
            padding={
              smDown
                ? theme.spacing(1)
                : mdDown
                ? theme.spacing(2)
                : theme.spacing(4)
            }
          >
            {children}
          </Box>
        </Container>
      </Box>
    </>
  );
};
