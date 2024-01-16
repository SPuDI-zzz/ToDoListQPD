import React from 'react';
import { useGetCategoriesQuery } from '../../app/services/categories.api';

const Categories = () => {
    
    const {isLoading: isLoadingCategories, data: categoriesResponse } = useGetCategoriesQuery(undefined, {pollingInterval: 10000});
    debugger;
    return (
        <div>
            {isLoadingCategories ? 
                <div>Loading...</div> : 
                
                    categoriesResponse?.map(category => <div key={category.id}>{category.name}</div>)
                
            }
        </div>
    );
};

export default Categories;
