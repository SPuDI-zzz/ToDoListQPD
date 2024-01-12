import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Tasks from '../Tasks/Tasks';
import CreateTask from '../CreateTask/CreateTask';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { setOpenModal } from '../../features/modals/modals.slice';
import { MODAL_STATE } from '../../constants/constants';

const modals = new Map<string, JSX.Element | null>([
    [MODAL_STATE.CREATE, <CreateTask />],
    [MODAL_STATE.EDIT, <></>],
    [MODAL_STATE.DELETE, <></>],
    [MODAL_STATE.CLOSE, null],
]);

const TasksPage = () => { 
    const { modalState } = useTypedSelector(state => state.modals)
    const dispatch = useDispatch();

    const addTaskHandler = () => dispatch(setOpenModal(MODAL_STATE.CREATE))
    
    return (
        <>
            <Header buttonText='Добавить задачу' onButtonClick={addTaskHandler}/>
            <Main>
                <Tasks />
            </Main>          
            {modals.get(modalState)} 
        </>
    );
};

export default TasksPage;
