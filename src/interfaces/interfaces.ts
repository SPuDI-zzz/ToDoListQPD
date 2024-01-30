export interface ITask {
    id: number;
    name: string;
    description: string;
    categoryId?: number;
}

export interface ITaskWithCategory extends ITask {
    categoryName?: string;
}

export interface ITaskCreate extends Omit<ITask, 'id'> {}

export interface ICategory {
    id: number;
    name: string;
    description: string;
}

export interface ICategoryCreate extends Omit<ICategory, 'id'> {}
