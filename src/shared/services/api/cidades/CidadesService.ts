import { Environment } from '../../../environment';
import { Api } from '../axios.config';

export interface IListagemCidade {
  id: string;
  cidade: string;
}

export interface ICidades {
  cidades: IListagemCidade[];
}

type TCidadesComTotalCount = {
  data: IListagemCidade[];
  totalCount: number;
};

const getAll = async (
  isListField = false,
  page = 1,
  filter = ''
): Promise<TCidadesComTotalCount | Error> => {
  try {
    const urlRelativa = isListField
      ? `/cidades?_page=${page}&cidade_like=${filter}`
      : `/cidades?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&cidade_like=${filter}`;
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

const getById = async (id: string): Promise<IListagemCidade | Error> => {
  try {
    const { data } = await Api.get(`/cidades/${id}`);

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
  dados: Omit<IListagemCidade, 'id'>
): Promise<string | Error> => {
  try {
    const { data } = await Api.post<IListagemCidade>('/cidades', dados);

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
  id: string,
  dados: IListagemCidade
): Promise<unknown> => {
  try {
    await Api.put<IListagemCidade>(`/cidades/${id}`, dados);
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || 'Erro ao atualizar o registro.'
    );
  }
};

const deleteById = async (id: string): Promise<void | Error> => {
  try {
    await Api.delete<IListagemCidade>(`/cidades/${id}`);
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || 'Erro ao deletar o registro.'
    );
  }
};

export const CidadesService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
