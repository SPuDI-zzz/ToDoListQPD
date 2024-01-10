export interface ITaskResponse {
    id: number;
    name: string;
    description: string;
    categoryId?: number;
}

export interface ITask extends Omit<ITaskResponse, 'categoryId'> {
    categoryName?: string;
}

export interface ICategoryResponse {
    id: number;
    name: string;
    description: string;
}

export interface ICategory extends ICategoryResponse { }
