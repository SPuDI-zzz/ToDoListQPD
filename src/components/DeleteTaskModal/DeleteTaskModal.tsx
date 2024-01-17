import React, { useState } from 'react';
import DeleteModal from '../DeleteModal/DeleteModal';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDeleteTaskMutation } from '../../app/services/tasks.api';

const DeleteTaskModal = () => {
    const { task } = useTypedSelector(state => state.modals)
    const [deleteTask] = useDeleteTaskMutation();

    const deleteTaskHandler = async (id: number) => {
        await deleteTask(id).unwrap();
    }

    return (
        task && task.id ?
            <DeleteModal 
                headerText={'Удаление задачи'}
                id={task.id}
                messageText={`Вы уверены, что хотите удалить категорию “${task.name}”?`}
                onFormSubmit={deleteTaskHandler} 
            /> :
            ''
    );
};

export default DeleteTaskModal;
