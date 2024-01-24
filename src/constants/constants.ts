import { ICategoryRequest, ITaskRequest } from "../interfaces/interfaces";

export const TO_DO_LIST_URL = 'http://localhost:8089/api/ToDoList';

export const MINUTE = 60;

export const MAX_LENGTH_TASK_NAME = 255;
export const MAX_LENGTH_TASK_DESCRIPTION = 1536;
export const MAX_LENGTH_CATEGORY_NAME = MAX_LENGTH_TASK_NAME;
export const MAX_LENGTH_CATEGORY_DESCRIPTION = 512;

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
