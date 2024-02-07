import React, { FC, useEffect } from 'react';
import { useDeleteCategoryMutation } from '../../app/services/categories.api';
import { ICategory } from '../../interfaces/interfaces';
import ConfirmDialog from '../../ui-kit/ConfirmDialog/ConfirmDialog';
import ErrorAlert from '../../ui-kit/ErrorAlert/ErrorAlert';

interface DeleteCategoryModalProps {
    isOpened: boolean;
    onClose: () => void;
    category: ICategory;
}

const DeleteCategoryModal:FC<DeleteCategoryModalProps> = ({isOpened, onClose, category}) => {
    const [deleteCategory, {isError, isSuccess, reset, isLoading}] = useDeleteCategoryMutation();

    // eslint-disable-next-line
    const onCloseHandler = () => {
        reset();
        onClose();
    };

    useEffect(() => {
        if (isSuccess)
            onCloseHandler();
    }, [isSuccess, onCloseHandler]);

    const onConfirm = async () => {
        deleteCategory(category.id);
    }
    
    return (
        <ConfirmDialog 
            isLoading={isLoading}
            isOpened={isOpened}
            onCancel={onCloseHandler} 
            headerText={'Удаление категории'} 
            onConfirm={onConfirm} 
            messageText={`Вы уверены, что хотите удалить категорию “${category.name}”?`} 
            btnConfirmText={'Да'} 
            btnCanselText={'Нет'}     
        >
            <ErrorAlert message={isError ? `Ошибка при удалении категории ${category.name}!` : ''}/>
        </ConfirmDialog>        
    );
};

export default DeleteCategoryModal;
