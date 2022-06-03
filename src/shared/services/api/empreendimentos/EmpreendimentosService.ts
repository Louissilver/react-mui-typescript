import { Environment } from '../../../environment';
import { Api } from '../axios.config';

// export interface IImagemProps {
//   imagem: string;
//   alt: string;
// }

export interface IListagemEmpreendimento {
  id: number;
  titulo: string;
  to: string;
  descricao: string;
  cidade: string;
  thumb: string;
  alt: string;
  texto: string;
  //imagens: IImagemProps[];
}

export interface IDetalheEmpreendimento {
  id: number;
  titulo: string;
  to: string;
  descricao: string;
  cidade: string;
  thumb: string;
  alt: string;
  texto: string;
  //imagens: IImagemProps[];
}

type TEmpreendimentosComTotalCount = {
  data: IListagemEmpreendimento[];
  totalCount: number;
};

const getAll = async (
  page = 1,
  filter = ''
): Promise<TEmpreendimentosComTotalCount | Error> => {
  try {
    const urlRelativa = `/empreendimentos?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&titulo_like=${filter}`;
    const { data, headers } = await Api.get(urlRelativa);

    if (data) {
      return {
        data,
        totalCount: Number(
          headers['x-total-count'] || Environment.LIMITE_DE_LINHAS
        ),
      };
    }
    return new Error('Erro ao listar os registros.');
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || 'Erro ao listar os registros.'
    );
  }
};

const getById = async (id: number): Promise<IDetalheEmpreendimento | Error> => {
  try {
    const { data } = await Api.get(`/empreendimentos/${id}`);

    if (data) {
      return data;
    }
    return new Error('Erro ao consultar o registro.');
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || 'Erro ao consultar o registro.'
    );
  }
};

const create = async (
  dados: Omit<IDetalheEmpreendimento, 'id'>
): Promise<number | Error> => {
  try {
    const { data } = await Api.post<IDetalheEmpreendimento>(
      '/empreendimentos',
      dados
    );

    if (data) {
      return data.id;
    }
    return new Error('Erro ao cadastrar o registro.');
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || 'Erro ao cadastrar o registro.'
    );
  }
};

const updateById = async (
  id: number,
  dados: IDetalheEmpreendimento
): Promise<unknown> => {
  try {
    await Api.put<IDetalheEmpreendimento>(`/empreendimentos/${id}`, dados);
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || 'Erro ao atualizar o registro.'
    );
  }
};

const deleteById = async (id: number): Promise<void | Error> => {
  try {
    await Api.delete<IDetalheEmpreendimento>(`/empreendimentos/${id}`);
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || 'Erro ao deletar o registro.'
    );
  }
};

export const EmpreendimentosService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
