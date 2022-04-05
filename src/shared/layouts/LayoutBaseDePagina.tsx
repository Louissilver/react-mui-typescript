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
          backgroundImage: 'linear-gradient( to right, #F83821 0%,#F83821 1%, #FE9426 1.1%,#FE9426 2%, #EDDDB1 2.1%,#EDDDB1 3.2%, white 3.3%, white 97%, #009CE0 98%, #003EA5 99%, #1D1F48 100% )',
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
