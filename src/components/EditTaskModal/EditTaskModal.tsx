import React, { FC, useEffect, useRef } from 'react';
import TaskModal from '../TaskModal/TaskModal';
import { useUpdateTaskMutation } from '../../app/services/tasks.api';
import { ITask } from '../../interfaces/interfaces';

interface EditTaskModalProps {
    isOpened: boolean;
    onClose: () => void;
    task: ITask;
}

const EditTaskModal:FC<EditTaskModalProps> = ({isOpened, onClose, task}) => {
    const [updateTask, {isError, isSuccess, reset, isLoading}] = useUpdateTaskMutation();
    const taskRef = useRef<ITask>(task);
    
    // eslint-disable-next-line
    const onCloseHandler = () => {
        reset();
        onClose();
    };

    useEffect(() => {
        if (isSuccess)
            onCloseHandler();
    }, [isSuccess, onCloseHandler]);

    const updateTaskHandler = async (task: ITask) => {
        taskRef.current = task;
        updateTask(task);
    }

    return (            
        <TaskModal
            isLoading={isLoading}
            isOpened={isOpened}
            onClose={onCloseHandler} 
            headerText={'Редактирование задачи'} 
            defaultValues={task}
            btnSubmitText={'Сохранить'}
            btnCancelText={'Закрыть'}
            onFormSubmit={updateTaskHandler}
            errorMessage={isError ? `Ошибка при обновлении задачи ${taskRef.current.name}!` : ''}
        />        
    );
};

export default EditTaskModal;
