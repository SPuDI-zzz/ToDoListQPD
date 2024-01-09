import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import TasksPage from './components/TasksPage/TasksPage';
import CategoriesPage from './components/CategoriesPage/CategoriesPage';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/*'} element={<NotFoundPage />}/>
                <Route path={'/tasks'} element={<TasksPage />}/>
                <Route path={'/categories'} element={<CategoriesPage />}/>                   
            </Routes>
        </BrowserRouter>
    );
};

export default App;
