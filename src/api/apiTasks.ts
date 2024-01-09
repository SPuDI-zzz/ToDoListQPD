import { TO_DO_LIST_URL } from "../constants/constants"
import { ITaskResponse } from "../interfaces/interfaces"
import fetchApi from "./fetchApi"

export const getTasks = async (): Promise<ITaskResponse[]> => {
    return fetchApi<ITaskResponse[]>(`${TO_DO_LIST_URL}/GetTasks`);
}
