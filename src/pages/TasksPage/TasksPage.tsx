import React from 'react';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Tasks from '../../components/Tasks/Tasks';
import CreateTask from '../../components/CreateTaskModal/CreateTaskModal';
import { MODAL_STATE } from '../../constants/constants';
import EditTask from '../../components/EditTaskModal/EditTaskModal';
import DeleteTask from '../../components/DeleteTaskModal/DeleteTaskModal';
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
