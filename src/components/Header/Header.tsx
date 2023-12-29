import React from 'react';
import './Header.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Categories from '../Categories/Categories';
import Tasks from '../Tasks/Tasks';

const Header = () => {
    return (
        <BrowserRouter>
            <header className='header'>
                <div className='header__right-block'>
                    <h1 className='header__to-do_list'>ToDo List</h1>
                    <nav>
                        <ul className='header__navlinks'>
                            <li><Link to={'/tasks'}>Задачи</Link></li>
                            |
                            <li><Link to={'/categories'}>Категории</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className='header__btn-primary'>
                    <button >Добавить Категорию</button>
                </div>
            </header>
            <Routes>
                <Route path={'/tasks'} element={<Categories />}/>
                <Route path={'/categories'} element={<Tasks />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Header;
