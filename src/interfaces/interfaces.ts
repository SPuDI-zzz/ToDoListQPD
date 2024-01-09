export interface ITaskResponse {
    id: number;
    name: string;
    description: string;
    categoryId: number;
}

export interface ITask {
    id: number;
    name: string;
    description: string;
    categoryName?: string;
}

export interface ICategoryResponse {
    id: number;
    name: string;
    description: string;
}

export interface ICategory {
    id: number;
    name: string;
    description: string;
}

export interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}

export interface TaskProps {
    task: ITask;
}