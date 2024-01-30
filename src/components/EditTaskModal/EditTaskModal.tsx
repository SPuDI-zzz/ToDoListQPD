import React, { FC, useCallback, useEffect, useRef } from 'react';
import TaskModal from '../TaskModal/TaskModal';
import { useUpdateTaskMutation } from '../../app/services/tasks.api';
import { ITask } from '../../interfaces/interfaces';

interface EditTaskModalProps {
    isOpened: boolean;
    onClose: () => void;
    task: ITask;
}

const EditTaskModal:FC<EditTaskModalProps> = ({isOpened, onClose, task}) => {
    const [updateTask, {isError, isSuccess, reset}] = useUpdateTaskMutation();
    const taskRef = useRef<ITask>(task);
    
    const onCloseHandler = useCallback(() => {
        reset();
        onClose();
    }, [reset, onClose]);

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
