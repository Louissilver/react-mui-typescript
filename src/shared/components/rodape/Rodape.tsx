import {
  Box,
  Divider,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/system';

const contatos = [
  {
    label: 'Facebook: @imobiliariacap',
    icon: 'facebook',
    to: 'https://www.facebook.com/imobiliariacap',
  },
  {
    label: 'Instagram: @capimob',
    icon: 'center_focus_weak',
    to: 'https://www.instagram.com/capimob/',
  },
  {
    label: 'WhatsApp: +55 51 99928-2800',
    icon: 'whatsapp',
    to: 'https://web.whatsapp.com/send?phone=5551999282800&text=Oi%2C+Maike...',
  },
  {
    label: 'E-mail: cap@cap.imb.br',
    icon: 'email',
    to: 'mailto: cap@cap.imb.br',
  },
];

const enderecos = [
  {
    label: 'R. Gomes Jardim, 207 - Centro, Novo Hamburgo - RS, 93510-370',
    icon: 'apartment',
    to: 'https://goo.gl/maps/SyazhEaCz7KXmEmr7',
  },
  {
    label:
      'Filial: Rua Guilherme Shell, 1025 - Bairro Estância Velha - Canoas - RS',
    icon: 'home',
    to: 'https://goo.gl/maps/SyazhEaCz7KXmEmr7',
  },
];

interface IListaContatosProps {
  label: string;
  icon: string;
  to: string;
}

interface IListaEnderecosProps {
  label: string;
  icon: string;
  to: string;
}

const ListaContatos: React.FC<IListaContatosProps> = ({ to, icon, label }) => {
  const theme = useTheme();

  return (
    <ListItemButton component="a" href={to} target="_blank">
      <ListItemIcon
        sx={{
          color: theme.palette.secondary.contrastText,
        }}
      >
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

const ListaEnderecos: React.FC<IListaEnderecosProps> = ({
  to,
  icon,
  label,
}) => {
  const theme = useTheme();

  return (
    <ListItemButton component="a" href={to} target="_blank">
      <ListItemIcon
        sx={{
          color: theme.palette.secondary.contrastText,
        }}
      >
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

export const Rodape = () => {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      component="footer"
      textAlign="center"
      bgcolor={theme.palette.secondary.main}
      padding={mdDown ? theme.spacing(0) : theme.spacing(3)}
      color={theme.palette.secondary.contrastText}
    >
      <Box
        height="100%"
        display="flex"
        flexDirection={mdDown ? 'column' : 'row'}
        alignItems="center"
        justifyContent="space-around"
      >
        <Box
          height={mdDown ? '100%' : theme.spacing(30)}
          width={mdDown ? '100%' : '50%'}
          padding={theme.spacing(2, 5)}
          alignContent="center"
        >
          <Typography variant="h4" color={theme.palette.secondary.contrastText}>
            Contatos:
          </Typography>
          <List component="nav">
            {contatos.map((contato) => (
              <ListaContatos
                label={contato.label}
                icon={contato.icon}
                to={contato.to}
                key={contato.icon}
              />
            ))}
          </List>
        </Box>
        <Box
          height={mdDown ? '100%' : theme.spacing(30)}
          width={mdDown ? '100%' : '50%'}
          padding={theme.spacing(2, 5)}
          alignContent="center"
        >
          <Typography variant="h4" color={theme.palette.secondary.contrastText}>
            Endereços:
          </Typography>
          <List component="nav">
            {enderecos.map((endereco) => (
              <ListaEnderecos
                label={endereco.label}
                icon={endereco.icon}
                to={endereco.to}
                key={endereco.icon}
              />
            ))}
          </List>
        </Box>
      </Box>
      <Divider color={theme.palette.secondary.contrastText} />
      <Typography
        padding={theme.spacing(3)}
        color={theme.palette.secondary.contrastText}
      >
        &copy; Copyright 2022 - Projeto Integrador Web | Universidade La Salle
        <br />
        Chrystopher, Leonardo, Luís e Rafael
      </Typography>
    </Box>
  );
};
