import React, { FC, useCallback, useEffect, useRef } from 'react';
import CategoryModal from '../CategoryModal/CategoryModal';
import { useUpdateCategoryMutation } from '../../app/services/categories.api';
import { ICategory } from '../../interfaces/interfaces';

interface EditCategoryModalProps {
    isOpened: boolean;
    onClose: () => void;
    category: ICategory;
}

const EditCategoryModal:FC<EditCategoryModalProps> = ({isOpened, category, onClose}) => {
    const [updateCategory, {isError, isSuccess, reset}] = useUpdateCategoryMutation();
    const categoryRef = useRef<ICategory>(category);
    
    const onCloseHandler = useCallback(() => {
        reset();
        onClose();
    }, [reset, onClose]);

    useEffect(() => {
        if (isSuccess)
            onCloseHandler();
    }, [isSuccess, onCloseHandler]);
    
    const updateCategoryHandler = async (category: ICategory) => {   
        categoryRef.current = category;
        updateCategory(category);   
    }
    
    return (          
        <CategoryModal 
            headerText={'Редактирование категории'}
            defaultValues={category}
            btnSubmitText={'Сохранить'}
            btnCancelText={'Закрыть'}
            onFormSubmit={updateCategoryHandler}
            isOpened={isOpened}
            onClose={onCloseHandler}  
            errorMessage={isError ? `Ошибка при обновлении категории ${categoryRef.current.name}!` : ''}              
        />
    );
};

export default EditCategoryModal;
