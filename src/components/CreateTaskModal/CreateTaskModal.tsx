import React, { FC, useCallback, useEffect, useRef } from 'react';
import { ITaskCreate } from '../../interfaces/interfaces';
import { useAddTaskMutation } from '../../app/services/tasks.api';
import TaskModal from '../TaskModal/TaskModal';
import { DEFAULT_TASK } from '../../constants/constants';

interface CreateTaskProps {
    isOpened: boolean;
    onClose: () => void;
}

const CreateTask:FC<CreateTaskProps> = ({isOpened, onClose}) => {
    const [createTask, {isError, isSuccess, reset}] = useAddTaskMutation();
    const taskRef = useRef<ITaskCreate>();

    const onCloseHandler = useCallback(() => {
        reset();
        onClose();
    }, [reset, onClose]);

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
            defaultValues={DEFAULT_TASK}
            btnSubmitText={'Создать'}
            btnCancelText={'Закрыть'}
            onFormSubmit={createTaskHandler}
            isOpened={isOpened}
            onClose={onCloseHandler}
            errorMessage={isError ? `Ошибка при создании задачи ${taskRef.current?.name}!` : ''}
        />
    );
};

export default CreateTask;
