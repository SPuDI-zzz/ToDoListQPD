import React, { FC } from 'react';
import { useDeleteCategoryMutation } from '../../app/services/categories.api';
import { useGetTasksQuery, useUpdateTaskMutation } from '../../app/services/tasks.api';
import { ICategoryResponse, ITaskRequest } from '../../interfaces/interfaces';
import ConfirmDialog from '../../ui-kit/ConfirmDialog/ConfirmDialog';

interface DeleteCategoryModalProps {
    isOpened: boolean;
    onClose: () => void;
    category: ICategoryResponse;
}

const DeleteCategoryModal:FC<DeleteCategoryModalProps> = ({isOpened, onClose, category}) => {
    const { data: tasks } = useGetTasksQuery();
    const [deleteCategory] = useDeleteCategoryMutation();
    const [editTask] = useUpdateTaskMutation();

    const onConfirm = () => {
        const task = tasks?.find(task => task.categoryId === category.id);

        if (!task) {
            deleteCategory(category.id)
                .unwrap()
                .then(onClose);            
            return;
        }

        const taskRequest = {
            id: task.id,
            name: task.name,
            description: task.description,
            categoryId: undefined,
        } as ITaskRequest

        Promise.all([
            editTask(taskRequest).unwrap(),
            deleteCategory(category.id).unwrap(),
        ])
        .then(onClose);
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
        />        
    );
};

export default DeleteCategoryModal;
