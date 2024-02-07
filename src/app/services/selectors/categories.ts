import { createSelector } from "@reduxjs/toolkit";
import { getCategories } from "../categories.api";
import { SelectOption } from "../../../interfaces/interfaces";

export const selectCategoriesResult = getCategories.select();

export const selectOptions = createSelector(
    selectCategoriesResult,
    ({data: categories, isError}) => {
        const options = categories?.map<SelectOption>(category => (
            {label: category.name, value: category.id}
        ));

        return {
            options,
            isError  
        }
    }
); 
