export interface ITaskResponse {
    id: number;
    name: string;
    description: string;
    categoryId?: number;
}

export interface ITask extends ITaskResponse {
    categoryName?: string;
}

export interface ITaskRequest extends Omit<ITaskResponse, 'id'> {
    id?: number
}

export interface ICategoryResponse {
    id: number;
    name: string;
    description: string;
}

export interface ICategory extends ICategoryResponse { }

export interface ICategoryRequest extends Omit<ICategoryResponse, 'id'> {
    id?: number
}

export interface SelectOption {
    label: string;
    value: number;
}
