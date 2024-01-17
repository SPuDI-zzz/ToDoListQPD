import React, { useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { DEFAULT_CATEGORY } from '../../constants/constants';
import CategoryModal from '../CategoryModal/CategoryModal';
import { useUpdateCategoryMutation } from '../../app/services/categories.api';
import { ICategoryRequest } from '../../interfaces/interfaces';

const EditCategoryModal = () => {
    const { category } = useTypedSelector(state => state.modals);
    const [editCategory, setEditCategory] = useState<ICategoryRequest>(category ?? DEFAULT_CATEGORY);
    const [updateCategory] = useUpdateCategoryMutation();

    const updateCategoryHandler = async (category: ICategoryRequest) => {
        await updateCategory(category).unwrap();
    }
    
    return (
        <>
            {category &&
                <CategoryModal 
                    headerText={'Редактирование категории'} 
                    category={editCategory}
                    setCategory={setEditCategory}
                    btnSubmitText={'Сохранить'}
                    onFormSubmit={updateCategoryHandler}
                />
            }
        </>
    );
};

export default EditCategoryModal;
