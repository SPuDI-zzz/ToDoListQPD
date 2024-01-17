import React, { useState } from 'react';
import CategoryModal from '../CategoryModal/CategoryModal';
import { ICategoryRequest } from '../../interfaces/interfaces';
import { useAddCategoryMutation } from '../../app/services/categories.api';
import { DEFAULT_CATEGORY } from '../../constants/constants';

const CreateCategoryModal = () => {
    const [category, setCategory] = useState<ICategoryRequest>(DEFAULT_CATEGORY);
    const [createCategory] = useAddCategoryMutation();

    const createCategoryHandler = async (category: ICategoryRequest) => {
        await createCategory(category).unwrap();
    }
    
    return (
        <CategoryModal 
            headerText={'Создание категории'} 
            category={category}
            setCategory={setCategory}
            btnSubmitText={'Создать'}
            onFormSubmit={createCategoryHandler}
        />
    );
};

export default CreateCategoryModal;
