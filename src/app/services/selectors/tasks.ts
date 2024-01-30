import { createSelector } from "@reduxjs/toolkit";
import { tasksApi } from "../tasks.api";
import { selectCategoriesResult } from "./categories";
import { ITaskWithCategory } from "../../../interfaces/interfaces";

export const selectTasksResult = tasksApi.endpoints.getTasks.select();

export const selectAllTasksWithCategory = createSelector(
    [selectTasksResult, selectCategoriesResult],
    ({data : tasks}, {data : categories}) => {
        return tasks?.map<ITaskWithCategory>(task => {
            const categoryName = categories?.find(category => category.id === task.categoryId)?.name;

            return {
                ...task,
                categoryName: categoryName,
            }
        }) ?? [];
    }
);
