import { ITaskRequest, ITaskResponse } from "../../interfaces/interfaces";
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
        }),
        addTasks: builder.mutation<ITaskResponse, ITaskRequest>({
            query: (task) => ({
                url: '/AddTask',
                method: 'POST',
                body: task
            })
        })
    })
});

export const {
    useGetTasksQuery,
    useAddTasksMutation,
} = tasksApi;

export const {
    endpoints: {
        getTasks,
        addTasks,
    }
} = tasksApi
