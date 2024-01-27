import React, { FC, useState } from 'react';
import CategoryModal from '../CategoryModal/CategoryModal';
import { useUpdateCategoryMutation } from '../../app/services/categories.api';
import { ICategoryRequest, ICategoryResponse } from '../../interfaces/interfaces';

interface EditCategoryModalProps {
    isOpened: boolean;
    onClose: () => void;
    category: ICategoryResponse;
}

const EditCategoryModal:FC<EditCategoryModalProps> = ({isOpened, category, onClose}) => {
    const [updateCategory] = useUpdateCategoryMutation();
    const [errorMessage, setErrorMessage] = useState('');

    const updateCategoryHandler = async (category: ICategoryRequest) => {
        try {
            await updateCategory(category).unwrap()
            
            onClose();
        } catch {
            setErrorMessage(`Ошибка при обновлении категории ${category.name}!`);
        }
    }
    
    return (          
        <CategoryModal 
            headerText={'Редактирование категории'}
            category={category}
            btnSubmitText={'Сохранить'}
            btnCancelText={'Закрыть'}
            onFormSubmit={updateCategoryHandler}
            isOpened={isOpened}
            onClose={onClose}  
            errorMessage={errorMessage}              
        />
    );
};

export default EditCategoryModal;
