import React, { FC } from 'react';
import styles from './Header.module.css';
import Nav from '../Nav/Nav';

interface HeaderProps {
    buttonText?: string;
    onButtonClick?: () => void;
}

const Header: FC<HeaderProps> = ({buttonText, onButtonClick}) => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.leftBlock}>
                    <h1 className={styles.toDoList}>ToDo List</h1>
                    <Nav />
                </div>
                <button 
                    type='button' 
                    onClick={() => onButtonClick?.()}
                    className={styles.btnPrimary}
                >
                    {buttonText}
                </button>  
            </div>
        </header>  
    );
};

export default Header;
