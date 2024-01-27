import React, { FC, useState } from 'react';
import TaskModal from '../TaskModal/TaskModal';
import { useUpdateTaskMutation } from '../../app/services/tasks.api';
import { ITaskRequest, ITaskResponse } from '../../interfaces/interfaces';

interface EditTaskModalProps {
    isOpened: boolean;
    onClose: () => void;
    task: ITaskResponse;
}

const EditTaskModal:FC<EditTaskModalProps> = ({isOpened, onClose, task}) => {
    const [updateTask] = useUpdateTaskMutation();
    const [errorMessage, setErrorMessage] = useState('');

    const updateTaskHandler = async (task: ITaskRequest) => {
        try {
            await updateTask(task).unwrap();
            
            onClose();
        } catch {
            setErrorMessage(`Ошибка при обновлении задачи ${task.name}!`);
        }
    }

    return (            
        <TaskModal
            isOpened={isOpened}
            onClose={onClose} 
            headerText={'Редактирование задачи'} 
            task={task}
            btnSubmitText={'Сохранить'}
            btnCancelText={'Закрыть'}
            onFormSubmit={updateTaskHandler}
            errorMessage={errorMessage}
        />        
    );
};

export default EditTaskModal;
