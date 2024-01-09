import { TO_DO_LIST_URL } from "../constants/constants";
import { ICategoryResponse } from "../interfaces/interfaces";
import fetchApi from "./fetchApi";

export const getCategories = async (): Promise<ICategoryResponse[]> => {
    return fetchApi<ICategoryResponse[]>(`${TO_DO_LIST_URL}/GetCategories`);
}
