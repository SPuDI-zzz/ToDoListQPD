import React, { FC, useState } from 'react';
import { ITaskRequest, SelectOption } from '../../interfaces/interfaces';
import { useAddTaskMutation } from '../../app/services/tasks.api';
import TaskModal from '../TaskModal/TaskModal';
import { DEFAULT_TASK } from '../../constants/constants';

interface CreateTaskProps {
    isOpened: boolean;
    onClose: () => void;
}

const CreateTask:FC<CreateTaskProps> = ({isOpened, onClose}) => {
    const [createTask] = useAddTaskMutation();

    const createTaskHandler = async (task: ITaskRequest) => {
        await createTask(task).unwrap();
    }

    return (     
        <TaskModal 
            headerText={'Создание задачи'} 
            task={DEFAULT_TASK}
            btnSubmitText={'Создать'}
            btnCancelText={'Закрыть'}
            onFormSubmit={createTaskHandler}
            isOpened={isOpened}
            onClose={onClose}
        />
    );
};

export default CreateTask;
