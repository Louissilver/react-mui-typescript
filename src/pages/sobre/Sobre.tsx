import { useMediaQuery, useTheme } from '@mui/material';
import { Box, Typography } from '@mui/material';
import { LayoutBaseDePagina } from '../../shared/layouts/LayoutBaseDePagina';

export const Sobre: React.FC = () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <LayoutBaseDePagina>
      <Box display="flex" flexDirection="column" padding={
              smDown
                ? theme.spacing(0, 1)
                : mdDown
                ? theme.spacing(0, 2)
                : theme.spacing(0, 4)
            }>

      <Typography margin="0 0 2rem 0" variant="h4" color={theme.palette.primary.main} textAlign="center">
        Quem somos?
      </Typography>

      <Typography color={theme.palette.secondary.dark}>Nunc a libero at magna viverra molestie. Etiam mi urna, euismod id purus a, lacinia congue turpis. Vestibulum rhoncus at velit id sodales. Suspendisse dignissim sem ex, eget ultricies lectus efficitur et. Morbi ac diam nunc. Fusce sodales consectetur dolor, ut tristique odio pharetra eu. Maecenas ultrices, tortor ac pretium molestie, lectus lorem lacinia eros, varius facilisis mauris sem nec ipsum. Mauris purus eros, porta ut mollis non, sagittis at turpis. Ut venenatis lacus purus, mattis pretium dui convallis sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse maximus vestibulum luctus. Donec viverra, dui eu lobortis eleifend, lorem dolor accumsan lorem, ut lacinia libero nunc sed lectus. Aliquam ipsum diam, egestas condimentum lacinia tempus, aliquet sed quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce tempor mauris tristique, pellentesque magna a, accumsan tortor.</Typography>

      <Typography margin="2rem 0" variant="h4" color={theme.palette.primary.main} textAlign="center">
        Valores
      </Typography>

      <Typography color={theme.palette.secondary.dark}>Nunc a libero at magna viverra molestie. Etiam mi urna, euismod id purus a, lacinia congue turpis. Vestibulum rhoncus at velit id sodales. Suspendisse dignissim sem ex, eget ultricies lectus efficitur et. Morbi ac diam nunc. Fusce sodales consectetur dolor, ut tristique odio pharetra eu. Maecenas ultrices, tortor ac pretium molestie, lectus lorem lacinia eros, varius facilisis mauris sem nec ipsum. Mauris purus eros, porta ut mollis non, sagittis at turpis. Ut venenatis lacus purus, mattis pretium dui convallis sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse maximus vestibulum luctus. Donec viverra, dui eu lobortis eleifend, lorem dolor accumsan lorem, ut lacinia libero nunc sed lectus. Aliquam ipsum diam, egestas condimentum lacinia tempus, aliquet sed quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce tempor mauris tristique, pellentesque magna a, accumsan tortor.</Typography>

      <Typography margin="2rem 0" variant="h4" color={theme.palette.primary.main} textAlign="center">
        Princípios
      </Typography>

      <Typography color={theme.palette.secondary.dark}>Nunc a libero at magna viverra molestie. Etiam mi urna, euismod id purus a, lacinia congue turpis. Vestibulum rhoncus at velit id sodales. Suspendisse dignissim sem ex, eget ultricies lectus efficitur et. Morbi ac diam nunc. Fusce sodales consectetur dolor, ut tristique odio pharetra eu. Maecenas ultrices, tortor ac pretium molestie, lectus lorem lacinia eros, varius facilisis mauris sem nec ipsum. Mauris purus eros, porta ut mollis non, sagittis at turpis. Ut venenatis lacus purus, mattis pretium dui convallis sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse maximus vestibulum luctus. Donec viverra, dui eu lobortis eleifend, lorem dolor accumsan lorem, ut lacinia libero nunc sed lectus. Aliquam ipsum diam, egestas condimentum lacinia tempus, aliquet sed quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce tempor mauris tristique, pellentesque magna a, accumsan tortor.</Typography>

      <Typography margin="2rem 0" variant="h4" color={theme.palette.primary.main} textAlign="center">
        Nossa história
      </Typography>

      <Typography color={theme.palette.secondary.dark}>Nunc a libero at magna viverra molestie. Etiam mi urna, euismod id purus a, lacinia congue turpis. Vestibulum rhoncus at velit id sodales. Suspendisse dignissim sem ex, eget ultricies lectus efficitur et. Morbi ac diam nunc. Fusce sodales consectetur dolor, ut tristique odio pharetra eu. Maecenas ultrices, tortor ac pretium molestie, lectus lorem lacinia eros, varius facilisis mauris sem nec ipsum. Mauris purus eros, porta ut mollis non, sagittis at turpis. Ut venenatis lacus purus, mattis pretium dui convallis sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse maximus vestibulum luctus. Donec viverra, dui eu lobortis eleifend, lorem dolor accumsan lorem, ut lacinia libero nunc sed lectus. Aliquam ipsum diam, egestas condimentum lacinia tempus, aliquet sed quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce tempor mauris tristique, pellentesque magna a, accumsan tortor.</Typography>


      </Box>
    </LayoutBaseDePagina>
  );
};
