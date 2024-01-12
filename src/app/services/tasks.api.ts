import { ITaskResponse } from "../../interfaces/interfaces";
import { api } from "./api";

export const tasksApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getTasks: builder.query<ITaskResponse[], void>({
            query: () => ({
                url: '/GetTasks',
                method: 'GET',
            }),
            providesTags: () => [{
                type: 'Tasks'
            }]
        })
    })
});

export const {
    useGetTasksQuery,
} = tasksApi;

export const {
    endpoints: {
        getTasks,
    }
} = tasksApi
