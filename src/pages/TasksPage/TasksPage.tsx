import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Tasks from '../../components/Tasks/Tasks';
import CreateTask from '../../components/CreateTaskModal/CreateTaskModal';

const TasksPage = () => {
    const [isOpenedCreateTaskModal, setIsOpenedCreateTaskModal] = useState(false);

    const addTaskHandler = () => setIsOpenedCreateTaskModal(true);
    const onCloseModal = () => setIsOpenedCreateTaskModal(false);

    return (
        <>
            <Header buttonText='Добавить задачу' onButtonClick={addTaskHandler} />
            <Main>
                <Tasks />
            </Main>
            {isOpenedCreateTaskModal && <CreateTask 
                isOpened={isOpenedCreateTaskModal}
                onClose={onCloseModal} 
            />}
        </>
    );
};

export default TasksPage;
