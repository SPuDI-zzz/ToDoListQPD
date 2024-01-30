import { ITaskCreate, ITask } from "../../interfaces/interfaces";
import { api } from "./api";

export const tasksApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getTasks: builder.query<ITask[], void>({
            query: () => ({
                url: '/GetTasks',
                method: 'GET',
            }),
            providesTags: () => [{ 
                type: 'Tasks'
            }],
        }),
        addTask: builder.mutation<ITask, ITaskCreate>({
            query: (task) => ({
                url: '/AddTask',
                method: 'POST',
                body: task
            }),
            invalidatesTags: () => [{
                type: 'Tasks'
            }]
        }),
        updateTask: builder.mutation<ITask, ITask>({
            query: (task) => ({
                url: '/UpdateTask',
                method: 'POST',
                body: task
            }),
            invalidatesTags: () => [{
                type: 'Tasks'
            }]
        }),
        deleteTask: builder.mutation<void, number>({
            query: (id) => ({
                url: `/RemoveTask/${id}`,
                method: 'GET',
            }),
            invalidatesTags: () => [{
                type: 'Tasks'
            }]
        }),
    })
});

export const {
    useGetTasksQuery,
    useAddTaskMutation,
    useUpdateTaskMutation,
    useDeleteTaskMutation,
} = tasksApi;

export const {
    endpoints: {
        getTasks,
        addTask,
        updateTask,
        deleteTask,
    }
} = tasksApi;
