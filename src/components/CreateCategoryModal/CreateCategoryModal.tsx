import React, { FC, useEffect, useRef } from 'react';
import CategoryModal from '../CategoryModal/CategoryModal';
import { ICategoryCreate } from '../../interfaces/interfaces';
import { useAddCategoryMutation } from '../../app/services/categories.api';

interface CreateCategoryModalProps {
    isOpened: boolean;
    onClose: () => void;
}

const CreateCategoryModal:FC<CreateCategoryModalProps> = ({isOpened, onClose}) => {
    const [createCategory, {isError, isSuccess, reset, isLoading}] = useAddCategoryMutation();
    const categoryRef = useRef<ICategoryCreate>();

    // eslint-disable-next-line
    const onCloseHandler = () => {
        reset();
        onClose();
    };

    useEffect(() => {
        if (isSuccess)
            onCloseHandler();
    }, [isSuccess, onCloseHandler]);

    const createCategoryHandler = async (category: ICategoryCreate) => {
        categoryRef.current = category;
        createCategory(category);
    }
    
    return (
        <CategoryModal 
            isLoading={isLoading}
            headerText={'Создание категории'}
            btnSubmitText={'Создать'}
            btnCancelText={'Закрыть'} 
            onFormSubmit={createCategoryHandler} 
            isOpened={isOpened}
            onClose={onCloseHandler}  
            errorMessage={isError ? `Ошибка при создании категории ${categoryRef.current?.name}!`: ''}      
        />
    );
};

export default CreateCategoryModal;
