import React, { FC } from 'react';
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

    const updateTaskHandler = async (task: ITaskRequest) => {
        await updateTask(task).unwrap();
    }

    return (
        <>
            {task &&
                <TaskModal
                    isOpened={isOpened}
                    onClose={onClose} 
                    headerText={'Редактирование задачи'} 
                    task={task}
                    btnSubmitText={'Сохранить'}
                    btnCancelText={'Закрыть'}
                    onFormSubmit={updateTaskHandler}
                />
            }
        </>
    );
};

export default EditTaskModal;
