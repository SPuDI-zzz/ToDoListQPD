import { ICategoryRequest, ICategoryResponse } from "../../interfaces/interfaces";
import { api } from "./api";

export const categoriesApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getCategories: builder.query<ICategoryResponse[], void>({
            query: () => ({
                url: '/GetCategories',
                method: 'GET',
            }),
            providesTags: () => [{ 
                type: 'Categories'
            }],
        }),
        addCategory: builder.mutation<ICategoryResponse, ICategoryRequest>({
            query: (category) => ({
                url: '/AddCategory',
                method: 'POST',
                body: category
            }),
            invalidatesTags: () => [{
                type: 'Tasks'
            }]
        }),
        updateCategory: builder.mutation<ICategoryResponse, ICategoryRequest>({
            query: (category) => ({
                url: '/UpdateCategory',
                method: 'POST',
                body: category
            }),
            invalidatesTags: () => [{
                type: 'Tasks'
            }]
        }),
        deleteCategory: builder.mutation<void, number>({
            query: (id) => ({
                url: `/RemoveCategory/${id}`,
                method: 'POST',
            }),
            invalidatesTags: () => [{
                type: 'Tasks'
            }]
        }),
    })
});

export const {
    useGetCategoriesQuery,
    useAddCategoryMutation,
    useUpdateCategoryMutation,
    useDeleteCategoryMutation,
} = categoriesApi;

export const {
    endpoints: {
        getCategories,
    }
} = categoriesApi
