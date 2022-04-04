import { useTheme, useMediaQuery, Container } from '@mui/material';
import { Box } from '@mui/system';

export const LayoutBaseDePagina: React.FC = ({ children }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Box
        height="100%"
        sx={{
          backgroundImage: { xs: 'none', md: 'url("./bgcap.svg")' },
          backgroundRepeat: { xs: 'none', md: 'no-repeat' },
          backgroundSize: { xs: 'none', md: 'cover' },
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
