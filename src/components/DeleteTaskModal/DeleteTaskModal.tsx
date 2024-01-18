import React from 'react';
import DeleteModal from '../DeleteModal/DeleteModal';
import { useDeleteTaskMutation } from '../../app/services/tasks.api';
import { useModals } from '../../hooks/useModals';

const DeleteTaskModal = () => {
    const { task } = useModals();
    const [deleteTask] = useDeleteTaskMutation();

    const deleteTaskHandler = async (id: number) => {
        await deleteTask(id).unwrap();
    }

    return (
        <>
            {task?.id &&
                <DeleteModal 
                    headerText={'Удаление задачи'}
                    id={task.id}
                    messageText={`Вы уверены, что хотите удалить категорию “${task.name}”?`}
                    onFormSubmit={deleteTaskHandler} 
                />
            }
        </>
    );
};

export default DeleteTaskModal;
