import React, { FC, PropsWithChildren } from 'react';
import styles from './Header.module.css';
import Nav from '../Nav/Nav';

const Header: FC<PropsWithChildren> = ({children}) => {
    return (
        <header className={styles.container}>
            <div className={styles.leftBlock}>
                <p className={styles.toDoList}>ToDo List</p>
                <Nav />
            </div>
            {children}
        </header>  
    );
};

export default Header;
