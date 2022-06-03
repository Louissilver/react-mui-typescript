import {
  Box,
  Grid,
  Icon,
  IconButton,
  LinearProgress,
  Typography,
} from '@mui/material';
import { MouseEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FerramentasDeDetalhe } from '../../shared/components';
import {
  VTextField,
  VForm,
  useVForm,
  IVFormErrors,
  VMultiTextField,
} from '../../shared/forms';
import { LayoutBaseDePagina } from '../../shared/layouts';
import { EmpreendimentosService } from '../../shared/services/api/empreendimentos/EmpreendimentosService';
import * as yup from 'yup';

interface IFormData {
  titulo: string;
  to: string;
  descricao: string;
  cidade: string;
  thumb: string;
  alt: string;
  texto: string;
}

const formValidationSchema: yup.SchemaOf<IFormData> = yup.object().shape({
  titulo: yup.string().required().min(3),
  to: yup.string().required().min(3),
  descricao: yup.string().required().min(3),
  cidade: yup.string().required().min(3),
  thumb: yup.string().required().min(3),
  alt: yup.string().required().min(3),
  texto: yup.string().required().min(3),
});

export const DetalheDeEmpreendimentos: React.FC = () => {
  const { id = 'nova' } = useParams<'id'>();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [nome, setNome] = useState('');
  const { formRef, save, saveAndClose, isSaveAndClose } = useVForm();

  const [multiInput, setMultiInput] = useState([
    {
      'imagens.imagem': '',
      'imagens.alt': '',
    },
  ]);

  const handleAddClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setMultiInput([
      ...multiInput,
      {
        'imagens.imagem': '',
        'imagens.alt': '',
      },
    ]);
  };

  const handleRemoveClick = (
    e: MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    e.preventDefault();
    const inputList = [...multiInput];
    inputList.splice(index, 1);
    setMultiInput(inputList);
  };

  const handleInputChange = (
    e: { target: { name: string; value: string } },
    index: string | number
  ) => {
    const { name, value } = e.target;
    const inputList = [...multiInput];
    inputList[index][name] = value;
    setMultiInput(inputList);
  };

  useEffect(() => {
    if (id !== 'nova') {
      setIsLoading(true);
      EmpreendimentosService.getById(Number(id)).then((result) => {
        setIsLoading(false);
        if (result instanceof Error) {
          alert(result.message);
          navigate('/empreendimentos');
        } else {
          setNome(result.titulo);
          formRef.current?.setData(result);
        }
      });
    } else {
      formRef.current?.setData({
        titulo: '',
        to: '',
        descricao: '',
        cidade: '',
        thumb: '',
        alt: '',
        texto: '',
      });
    }
  }, [id]);

  const handleSave = (dados: IFormData) => {
    formValidationSchema
      .validate(dados, { abortEarly: false })
      .then((dadosValidados) => {
        setIsLoading(true);

        if (id === 'nova') {
          EmpreendimentosService.create(dadosValidados).then((result) => {
            setIsLoading(false);
            if (result instanceof Error) {
              alert(result.message);
            } else {
              alert('Registro cadastrado com sucesso.');
              if (isSaveAndClose()) {
                navigate('/empreendimentos');
              } else {
                navigate(`/empreendimentos/detalhe/${result}`);
              }
            }
          });
        } else {
          EmpreendimentosService.updateById(Number(id), {
            id: Number(id),
            ...dadosValidados,
          }).then((result) => {
            setIsLoading(false);
            if (result instanceof Error) {
              alert(result.message);
            } else {
              alert('Registro alterado com sucesso.');
              if (isSaveAndClose()) {
                navigate('/empreendimentos');
              }
            }
          });
        }
      })
      .catch((errors: yup.ValidationError) => {
        const validationErrors: IVFormErrors = {};

        errors.inner.forEach((error) => {
          if (!error.path) return;
          validationErrors[error.path] = error.message;
        });

        formRef.current?.setErrors(validationErrors);
      });
  };

  const handleDelete = (id: number) => {
    if (confirm('Tem certeza de que quer excluir esse registro?')) {
      EmpreendimentosService.deleteById(id).then((result) => {
        if (result instanceof Error) {
          alert(result.message);
        } else {
          alert('Registro excluído com sucesso.');
          navigate('/empreendimentos');
        }
      });
    }
  };

  return (
    <LayoutBaseDePagina
      titulo={id === 'novo' ? 'Novo empreendimento' : nome}
      barraDeFerramentas={
        <FerramentasDeDetalhe
          textoBotaoNovo="Novo"
          mostrarBotaoNovo={id !== 'novo'}
          mostrarBotaoVoltar
          mostrarBotaoApagar={id !== 'novo'}
          mostrarBotaoSalvar
          mostrarBotaoSalvarEVoltar
          aoClicarEmApagar={() => handleDelete(Number(id))}
          aoClicarEmNovo={() => navigate('/empreendimentos/detalhe/novo')}
          aoClicarEmSalvar={save}
          aoClicarEmSalvarEVoltar={saveAndClose}
          aoClicarEmVoltar={() => navigate('/empreendimentos')}
        />
      }
    >
      <VForm ref={formRef} onSubmit={handleSave}>
        <Box margin={1} display="flex" flexDirection="column">
          <Grid container direction="column" padding={2} spacing={2}>
            {isLoading && (
              <Grid item>
                <LinearProgress />
              </Grid>
            )}
            <Grid item>
              <Typography variant="h6">Informações gerais</Typography>
            </Grid>
            <Grid container item direction="row" spacing={2}>
              <Grid item xs={12} md={6}>
                <VTextField
                  disabled={isLoading}
                  fullWidth
                  label="Título"
                  name="titulo"
                  onChange={(e) => setNome(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <VTextField
                  disabled={isLoading}
                  fullWidth
                  label="URL relativa"
                  name="to"
                />
              </Grid>
            </Grid>
            <Grid container item direction="row" spacing={2}>
              <Grid item xs={12} md={10}>
                <VTextField
                  disabled={isLoading}
                  fullWidth
                  label="Descrição breve"
                  name="descricao"
                />
              </Grid>
            </Grid>
            <Grid container item direction="row" spacing={2}>
              <Grid item xs={12} md={10}>
                <VTextField
                  disabled={isLoading}
                  fullWidth
                  label="Cidade"
                  name="cidade"
                />
              </Grid>
            </Grid>
            <Grid container item direction="row" spacing={2}>
              <Grid item xs={12} md={6}>
                <VTextField
                  disabled={isLoading}
                  fullWidth
                  label="Imagem principal"
                  name="thumb"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <VTextField
                  disabled={isLoading}
                  fullWidth
                  label="Texto alternativo da imagem"
                  name="alt"
                />
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="h6">Informações detalhadas</Typography>
            </Grid>
            <Grid container item direction="row" spacing={2}>
              <Grid item xs={12} md={10}>
                <VTextField
                  disabled={isLoading}
                  fullWidth
                  label="Texto"
                  name="texto"
                  multiline
                  maxRows={10}
                />
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="h6">Imagens do carrossel</Typography>
            </Grid>
            {multiInput.map((item, index) => {
              return (
                <Grid container item direction="row" spacing={2} key={index}>
                  <Grid item xs={12} md={5}>
                    <VMultiTextField
                      disabled={isLoading}
                      fullWidth
                      label="Imagem"
                      name="imagens.imagem"
                      onChange={(e) => handleInputChange(e, index)}
                    />
                  </Grid>
                  <Grid item xs={12} md={5}>
                    <VMultiTextField
                      disabled={isLoading}
                      fullWidth
                      label="Texto alternativo"
                      name="imagens.alt"
                      onChange={(e) => handleInputChange(e, index)}
                    />
                  </Grid>

                  <Grid item xs={12} md={2}>
                    <IconButton onClick={(e) => handleAddClick(e)}>
                      <Icon>add</Icon>
                    </IconButton>
                    {index > 0 && (
                      <>
                        <IconButton
                          onClick={(e) => handleRemoveClick(e, index)}
                        >
                          <Icon>remove</Icon>
                        </IconButton>
                      </>
                    )}
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </VForm>
    </LayoutBaseDePagina>
  );
};
