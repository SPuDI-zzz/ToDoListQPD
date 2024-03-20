import React, { FC, useEffect, useRef } from 'react';
import { ITaskCreate } from '../../interfaces/interfaces';
import { useAddTaskMutation } from '../../app/services/tasks.api';
import TaskModal from '../TaskModal/TaskModal';

interface CreateTaskModalProps {
    isOpened: boolean;
    onClose: () => void;
}

const CreateTaskModal:FC<CreateTaskModalProps> = ({isOpened, onClose}) => {
    const [createTask, {isError, isSuccess, reset, isLoading}] = useAddTaskMutation();
    const taskRef = useRef<ITaskCreate>();

    // eslint-disable-next-line
    const onCloseHandler = () => {
        reset();
        onClose();
    };

    useEffect(() => {
        if (isSuccess)
            onCloseHandler();
    }, [isSuccess, onCloseHandler]);

    const createTaskHandler = async (task: ITaskCreate) => {
        taskRef.current = task;
        createTask(task);
    }

    return (     
        <TaskModal 
            headerText={'Создание задачи'} 
            btnSubmitText={'Создать'}
            btnCancelText={'Закрыть'}
            onFormSubmit={createTaskHandler}
            isOpened={isOpened}
            onClose={onCloseHandler}
            errorMessage={isError ? `Ошибка при создании задачи ${taskRef.current?.name}!` : ''}
            isLoading={isLoading}
        />
    );
};

export default CreateTaskModal;
