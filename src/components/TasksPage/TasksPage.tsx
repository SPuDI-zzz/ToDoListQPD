import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Tasks from '../Tasks/Tasks';
import CreateTask from '../CreateTaskModal/CreateTaskModal';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { setCreateTaskModal } from '../../features/modals/modals.slice';
import { MODAL_STATE } from '../../constants/constants';
import EditTask from '../EditTaskModal/EditTaskModal';
import DeleteTask from '../DeleteTaskModal/DeleteTaskModal';

const modals = new Map<string, JSX.Element | null>([
    [MODAL_STATE.CREATE, <CreateTask />],
    [MODAL_STATE.EDIT, <EditTask />],
    [MODAL_STATE.DELETE, <DeleteTask />],
    [MODAL_STATE.CLOSE, null],
]);

const TasksPage = () => {
    const { modalState } = useTypedSelector(state => state.modals)
    const dispatch = useDispatch();

    const addTaskHandler = () => dispatch(setCreateTaskModal());

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
