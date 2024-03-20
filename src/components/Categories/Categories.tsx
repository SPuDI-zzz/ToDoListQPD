import React from 'react';
import { useGetCategoriesQuery } from '../../app/services/categories.api';
import Category from '../Category/Category';
import ErrorAlert from '../../ui-kit/ErrorAlert/ErrorAlert';

const Categories = () => {  
    const {isLoading, data: categories, isError} = useGetCategoriesQuery();
    
    if (isError) {
        return <ErrorAlert message={'Не удалось получить данные по категориям!'}/>
    }

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
