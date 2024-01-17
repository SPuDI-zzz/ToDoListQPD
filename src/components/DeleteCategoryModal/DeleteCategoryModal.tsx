import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import DeleteModal from '../DeleteModal/DeleteModal';
import { useDeleteCategoryMutation } from '../../app/services/categories.api';

const DeleteCategoryModal = () => {
    const { category } = useTypedSelector(state => state.modals)
    const [deleteCategory] = useDeleteCategoryMutation();

    const deleteCategoryHandler = async (id: number) => {
        await deleteCategory(id).unwrap();
    }
    
    return (
        category && category.id ?
            <DeleteModal 
                headerText={'Удаление категории'}
                id={category.id}
                messageText={`Вы уверены, что хотите удалить категорию “${category.name}”?`}
                onFormSubmit={deleteCategoryHandler} 
            /> :
            ''
    );
};

export default DeleteCategoryModal;
