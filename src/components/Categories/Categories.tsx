import React from 'react';
import { useGetCategoriesQuery } from '../../app/services/categories.api';
import Category from '../Category/Category';

const Categories = () => {  
    const {isLoading, data: categories } = useGetCategoriesQuery(undefined, {pollingInterval: 10000});

    return (
        <>
            {isLoading ? 
                <div>Loading...</div> : 
                    categories ?
                        categories.map(
                            category => 
                                <Category 
                                    key={category.id}
                                    category={category}
                                />
                        ) :
                        ''
            }
        </>
    );
};

export default Categories;
