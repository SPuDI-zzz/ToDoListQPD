import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Tasks from '../Tasks/Tasks';
import CreateTask from '../CreateTask/CreateTask';

const TasksPage = () => {
    const addTaskHandler = () => console.log('Button add clicked in tasks');
    return (
        <>
            <Header buttonText='Добавить задачу' onButtonClick={addTaskHandler}/>
            <Main>
                <Tasks />
            </Main>
            {/* <CreateTask /> */}
        </>
    );
};

export default TasksPage;
