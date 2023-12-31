import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Tasks from '../Tasks/Tasks';

const TasksPage = () => {
    const test = () => console.log('Button add clicked in tasks');
    return (
        <>
            <Header buttonText='Добавить задачу' onButtonClick={test}/>
            <Main>
                <Tasks />
            </Main>
        </>
    );
};

export default TasksPage;
