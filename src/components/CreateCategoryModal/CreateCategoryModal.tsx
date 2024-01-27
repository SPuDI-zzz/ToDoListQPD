import React, { FC, useState } from 'react';
import CategoryModal from '../CategoryModal/CategoryModal';
import { ICategoryRequest } from '../../interfaces/interfaces';
import { useAddCategoryMutation } from '../../app/services/categories.api';
import { DEFAULT_CATEGORY } from '../../constants/constants';

interface CreateCategoryModalProps {
    isOpened: boolean;
    onClose: () => void;
}

const CreateCategoryModal:FC<CreateCategoryModalProps> = ({isOpened, onClose}) => {
    const [createCategory] = useAddCategoryMutation();
    const [errorMessage, setErrorMessage] = useState('');

    const createCategoryHandler = async (category: ICategoryRequest) => {
        try {
            await createCategory(category).unwrap();

            onClose();
        } catch {
            setErrorMessage(`Ошибка при создании категории ${category.name}!`);
        }
    }
    
    return (
        <CategoryModal 
            headerText={'Создание категории'}
            category={DEFAULT_CATEGORY}
            btnSubmitText={'Создать'}
            btnCancelText={'Закрыть'} 
            onFormSubmit={createCategoryHandler} 
            isOpened={isOpened}
            onClose={onClose}  
            errorMessage={errorMessage}      
        />
    );
};

export default CreateCategoryModal;
