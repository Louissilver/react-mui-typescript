import { Box, ImageListItem } from '@mui/material';
import { LayoutBaseDePagina } from '../../shared/layouts/LayoutBaseDePagina';

export const Inicio: React.FC = () => {
  return (
    <LayoutBaseDePagina>
      <Box width="100%" height="100%">
        <ImageListItem sx={{
          width: '100%',
        }}>
         <img width="1366px" height="100%" src='./bemvindo.png' />
        </ImageListItem>
      </Box>
    </LayoutBaseDePagina>
  );
};
