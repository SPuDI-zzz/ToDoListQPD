import React from 'react';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Tasks from '../../components/Tasks/Tasks';
import CreateTaskButton from '../../components/CreateTaskButton/CreateTaskButton';

const TasksPage = () => {
    return (
        <>
            <Header>
                <CreateTaskButton/>
            </Header>
            <Main>
                <Tasks />
            </Main>
        </>
    );
};

export default TasksPage;
