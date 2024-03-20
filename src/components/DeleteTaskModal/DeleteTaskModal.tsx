import React, { FC, useEffect } from 'react';
import { useDeleteTaskMutation } from '../../app/services/tasks.api';
import ConfirmDialog from '../../ui-kit/ConfirmDialog/ConfirmDialog';
import { ITask } from '../../interfaces/interfaces';
import ErrorAlert from '../../ui-kit/ErrorAlert/ErrorAlert';

interface DeleteTaskModalProps {
    isOpened: boolean;
    onClose: () => void;
    task: ITask;
}

const DeleteTaskModal:FC<DeleteTaskModalProps> = ({isOpened, onClose, task}) => {
    const [deleteTask, {isError, isSuccess, reset, isLoading}] = useDeleteTaskMutation();

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
        deleteTask(task.id);
    }

    return (
        <ConfirmDialog
            isLoading={isLoading}
            isOpened={isOpened}
            onCancel={onCloseHandler}
            headerText={'Удаление задачи'}
            onConfirm={onConfirm}
            messageText={`Вы уверены, что хотите удалить задачу “${task.name}”?`}
            btnConfirmText={'Да'}
            btnCanselText={'Нет'}
        >
            <ErrorAlert message={isError ? `Ошибка при удалении задачи ${task.name}!` : ''}/>
        </ConfirmDialog> 
    );
};

export default DeleteTaskModal;
