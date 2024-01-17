import React, { useState } from 'react';
import TaskModal from '../TaskModal/TaskModal';
import { useUpdateTaskMutation } from '../../app/services/tasks.api';
import { ITaskRequest } from '../../interfaces/interfaces';
import { DEFAULT_TASK } from '../../constants/constants';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const EditTaskModal = () => {
    const { task } = useTypedSelector(state => state.modals)
    const [editTask, setEditTask] = useState<ITaskRequest>(task ? task : DEFAULT_TASK);
    const [updateTask] = useUpdateTaskMutation();

    const updateTaskHandler = async (task: ITaskRequest) => {
        await updateTask(task).unwrap();
    }

    return (
        task &&
            <TaskModal 
                headerText={'Редактирование задачи'} 
                task={editTask}
                setTask={setEditTask}
                btnSubmitText={'Сохранить'}
                onFormSubmit={updateTaskHandler}
            />
    );
};

export default EditTaskModal;
