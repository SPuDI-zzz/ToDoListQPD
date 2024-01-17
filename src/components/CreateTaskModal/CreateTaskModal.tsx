import React, { useState } from 'react';
import { ITaskRequest } from '../../interfaces/interfaces';
import { useAddTaskMutation } from '../../app/services/tasks.api';
import TaskModal from '../TaskModal/TaskModal';
import { DEFAULT_TASK } from '../../constants/constants';

const CreateTask = () => {
    const [task, setTask] = useState<ITaskRequest>(DEFAULT_TASK);
    const [createTask] = useAddTaskMutation();

    const createTaskHandler = async (task: ITaskRequest) => {
        await createTask(task).unwrap();
    }

    return (
        <TaskModal 
            headerText={'Создание задачи'} 
            task={task}
            setTask={setTask}
            btnSubmitText={'Создать'}
            onFormSubmit={createTaskHandler}
        />
    );
};

export default CreateTask;
