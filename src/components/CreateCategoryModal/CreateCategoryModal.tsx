import React, { FC, useCallback, useEffect, useRef } from 'react';
import CategoryModal from '../CategoryModal/CategoryModal';
import { ICategoryCreate } from '../../interfaces/interfaces';
import { useAddCategoryMutation } from '../../app/services/categories.api';
import { DEFAULT_CATEGORY } from '../../constants/constants';

interface CreateCategoryModalProps {
    isOpened: boolean;
    onClose: () => void;
}

const CreateCategoryModal:FC<CreateCategoryModalProps> = ({isOpened, onClose}) => {
    const [createCategory, {isError, isSuccess, reset}] = useAddCategoryMutation();
    const categoryRef = useRef<ICategoryCreate>();

    const onCloseHandler = useCallback(() => {
        reset();
        onClose();
    }, [reset, onClose]);

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
            headerText={'Создание категории'}
            defaultValues={DEFAULT_CATEGORY}
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
