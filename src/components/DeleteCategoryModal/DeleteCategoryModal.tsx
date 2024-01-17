import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import DeleteModal from '../DeleteModal/DeleteModal';
import { useDeleteCategoryMutation } from '../../app/services/categories.api';
import { useUpdateTaskMutation } from '../../app/services/tasks.api';
import { ITaskRequest } from '../../interfaces/interfaces';

const DeleteCategoryModal = () => {
    const { category } = useTypedSelector(state => state.modals)
    const { tasks } = useTypedSelector(state => state.tasks)
    const [deleteCategory] = useDeleteCategoryMutation();
    const [editTask] = useUpdateTaskMutation()

    const deleteCategoryHandler = async (id: number) => {
        const task = tasks?.find(task => task.categoryId === id);

        const taskRequest = {
            id: task?.id,
            name: task?.name,
            description: task?.description,
            categoryId: undefined,
        } as ITaskRequest
        
        await Promise.all([
            deleteCategory(id).unwrap(),
            editTask(taskRequest).unwrap()
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
