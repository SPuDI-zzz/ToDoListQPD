import React, { FC, useState } from 'react';
import { useDeleteTaskMutation } from '../../app/services/tasks.api';
import ConfirmDialog from '../../ui-kit/ConfirmDialog/ConfirmDialog';
import { ITaskResponse } from '../../interfaces/interfaces';

interface DeleteTaskModalProps {
    isOpened: boolean;
    onClose: () => void;
    task: ITaskResponse;
}

const DeleteTaskModal:FC<DeleteTaskModalProps> = ({isOpened, onClose, task}) => {
    const [deleteTask] = useDeleteTaskMutation();
    const [errorMessage, setErrorMessage] = useState('');

    const onConfirm = async () => {
        try {           
            await deleteTask(task.id).unwrap();
            
            onClose();
        } catch {
            setErrorMessage(`Ошибка при удалении задачи ${task.name}!`);
        }
    }

    return (
        <ConfirmDialog
            isOpened={isOpened}
            onCansel={onClose}
            headerText={'Удаление задачи'}
            onConfirm={onConfirm}
            messageText={`Вы уверены, что хотите удалить задачу “${task.name}”?`}
            btnConfirmText={'Да'}
            btnCanselText={'Нет'}
            errorMessage={errorMessage}
        />
    );
};

export default DeleteTaskModal;
