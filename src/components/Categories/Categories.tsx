import React from 'react';
import { useGetCategoriesQuery } from '../../app/services/categories.api';
import Category from '../Category/Category';

const Categories = () => {  
    const {isLoading, data: categories } = useGetCategoriesQuery();

    return (
        <>
            {isLoading ? 
                <div>Loading...</div> : 
                categories?.map(category => 
                    <Category 
                        key={category.id}
                        category={category}
                    />
                )
            }
        </>
    );
};

export default Categories;
