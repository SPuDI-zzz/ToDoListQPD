import React, { FC } from 'react';
import styles from './Header.module.css';
import Nav from '../Nav/Nav';

interface HeaderProps {
    buttonText?: string;
    onButtonClick?: () => void;
}

const Header: FC<HeaderProps> = ({buttonText, onButtonClick}) => {
    return (
        <header className={styles.container}>
            <div className={styles.leftBlock}>
                <p className={styles.toDoList}>ToDo List</p>
                <Nav />
            </div>
            {buttonText &&
                <button 
                    type='button' 
                    onClick={() => onButtonClick?.()}
                    className={styles.btnPrimary}
                >
                    {buttonText}
                </button>  
            }
        </header>  
    );
};

export default Header;
