import React, { FC } from 'react';
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

    const createCategoryHandler = async (category: ICategoryRequest) => {
        await createCategory(category).unwrap();
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
        />
    );
};

export default CreateCategoryModal;
