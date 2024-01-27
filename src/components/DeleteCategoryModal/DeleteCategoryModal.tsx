import React, { FC, useState } from 'react';
import { useDeleteCategoryMutation } from '../../app/services/categories.api';
import { ICategoryResponse } from '../../interfaces/interfaces';
import ConfirmDialog from '../../ui-kit/ConfirmDialog/ConfirmDialog';

interface DeleteCategoryModalProps {
    isOpened: boolean;
    onClose: () => void;
    category: ICategoryResponse;
}

const DeleteCategoryModal:FC<DeleteCategoryModalProps> = ({isOpened, onClose, category}) => {
    const [errorMessage, setErrorMessage] = useState('');
    const [deleteCategory] = useDeleteCategoryMutation();

    const onConfirm = async () => {
        try {
            await deleteCategory(category.id).unwrap();
            
            onClose();
        } catch {
            setErrorMessage(`Ошибка при удалении категории ${category.name}!`);
        }
    }
    
    return (
        <ConfirmDialog 
            isOpened={isOpened}
            onCansel={onClose} 
            headerText={'Удаление категории'} 
            onConfirm={onConfirm} 
            messageText={`Вы уверены, что хотите удалить категорию “${category.name}”?`} 
            btnConfirmText={'Да'} 
            btnCanselText={'Нет'}     
            errorMessage={errorMessage} 
        />        
    );
};

export default DeleteCategoryModal;
