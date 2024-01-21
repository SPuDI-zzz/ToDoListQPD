import React from 'react';
import DeleteModal from '../DeleteModal/DeleteModal';
import { useDeleteCategoryMutation } from '../../app/services/categories.api';
import { useUpdateTaskMutation } from '../../app/services/tasks.api';
import { ITaskRequest } from '../../interfaces/interfaces';
import { useModals } from '../../hooks/useModals';
import { useTasks } from '../../hooks/useTasks';

const DeleteCategoryModal = () => {
    const { category } = useModals();
    const { tasks } = useTasks();
    const [deleteCategory] = useDeleteCategoryMutation();
    const [editTask] = useUpdateTaskMutation()

    const deleteCategoryHandler = async (id: number) => {
        const task = tasks.find(task => task.categoryId === id);

        if (!task) {
            await deleteCategory(id).unwrap();
            return;
        }

        const taskRequest = {
            id: task.id,
            name: task.name,
            description: task.description,
            categoryId: undefined,
        } as ITaskRequest

        await Promise.all([
            editTask(taskRequest).unwrap(),
            deleteCategory(id).unwrap(),
        ]);        
    }
    
    return (
        <>
            {category?.id &&
                <DeleteModal 
                    headerText={'Удаление категории'}
                    id={category.id}
                    messageText={`Вы уверены, что хотите удалить категорию “${category.name}”?`}
                    onFormSubmit={deleteCategoryHandler} 
                />
            }
        </>
    );
};

export default DeleteCategoryModal;
