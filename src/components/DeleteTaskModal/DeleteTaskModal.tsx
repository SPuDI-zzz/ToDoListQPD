import React, { FC } from 'react';
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

    const deleteTaskHandler = async (id: number) => {
        await deleteTask(id).unwrap();
    }

    const onConfirm = () => {
        deleteTask(task.id)
            .unwrap()
            .then(onClose);
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
        />
    );
};

export default DeleteTaskModal;
