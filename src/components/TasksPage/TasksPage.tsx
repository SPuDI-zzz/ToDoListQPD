import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Tasks from '../Tasks/Tasks';
import CreateTask from '../CreateTaskModal/CreateTaskModal';
import { MODAL_STATE } from '../../constants/constants';
import EditTask from '../EditTaskModal/EditTaskModal';
import DeleteTask from '../DeleteTaskModal/DeleteTaskModal';
import { useActions } from '../../hooks/useActions';
import { useModals } from '../../hooks/useModals';

const modals = new Map<string, JSX.Element | null>([
    [MODAL_STATE.CREATE, <CreateTask />],
    [MODAL_STATE.EDIT, <EditTask />],
    [MODAL_STATE.DELETE, <DeleteTask />],
    [MODAL_STATE.CLOSE, null],
]);

const TasksPage = () => {
    const { modalState } = useModals();
    const { setCreateTaskModal } = useActions();

    const addTaskHandler = () => setCreateTaskModal();

    return (
        <>
            <Header buttonText='Добавить задачу' onButtonClick={addTaskHandler} />
            <Main>
                <Tasks />
            </Main>
            {modals.get(modalState)}
        </>
    );
};

export default TasksPage;
