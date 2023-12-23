import { Api } from "../ApiConfig";
import { ApiException } from "../ErrorException";
interface ITarefa {
  id: number;
  title: string;
  isCompleted: boolean;
}

const getAll = async (): Promise<ITarefa[] | ApiException> => {
  try {
    const { data } = await Api().get("/tarefas");
    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Erro ao buscar os registros");
  }
};
const getById = async (id: number): Promise<ITarefa | ApiException> => {
  try {
    const { data } = await Api().get(`/tarefas/${id}`);
    return data;
  } catch (error: any) {
    return new ApiException(
      error.message || "Erro ao consultar ao consultar o registro"
    );
  }
};
const create = async (
  dataToCreate: Omit<ITarefa, "id">
): Promise<ITarefa[] | ApiException> => {
  try {
    const { data } = await Api().post<any>("/tarefas", dataToCreate);
    return data;
  } catch (error: any) {
    return new ApiException(
      error.message || "Erro ao consultar ao criar o registro"
    );
  }
};
const updateById = async (
  id: string,
  dataToUpdate: ITarefa
): Promise<ITarefa[] | ApiException> => {
  try {
    const { data } = await Api().put(`/tarefas/${id}`, dataToUpdate);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Erro ao atualizar os registros");
  }
};
const deleteById = async (id: string): Promise<undefined | ApiException> => {
  try {
    const { data } = await Api().get(`/tarefas/${id}`);
    return undefined;
  } catch (error: any) {
    return new ApiException(error.message || "Erro ao deletar a consulta");
  }
};

export const TarefasService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
