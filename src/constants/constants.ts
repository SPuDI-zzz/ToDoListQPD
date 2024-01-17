import { ICategoryRequest, ITaskRequest } from "../interfaces/interfaces";

export const TO_DO_LIST_URL = 'http://localhost:8089/api/ToDoList';

export const enum MODAL_STATE {
    CREATE = 'create',
    EDIT = 'edit',
    DELETE = 'delete',
    CLOSE = 'close',
}

export const DEFAULT_TASK = {
    id: undefined,
    name: '',
    description: '',
    categoryId: undefined
} as ITaskRequest

export const DEFAULT_CATEGORY = {
    id: undefined,
    name: '',
    description: '',
} as ICategoryRequest
