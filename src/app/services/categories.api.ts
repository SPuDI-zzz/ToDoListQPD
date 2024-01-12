import { ICategoryResponse } from "../../interfaces/interfaces";
import { api } from "./api";

export const categoriesApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getCategories: builder.query<ICategoryResponse[], void>({
            query: () => ({
                url: 'GetCategories',
                method: 'GET',
            }),
            providesTags: () => [{
                type: 'Categories'
            }]
        })
    })
});

export const {
    useGetCategoriesQuery,
} = categoriesApi;

export const {
    endpoints: {
        getCategories,
    }
} = categoriesApi
