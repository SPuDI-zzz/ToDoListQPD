import React from 'react';
import styles from './Nav.module.css'
import HeaderNavLink from '../HeaderNavLink/HeaderNavLink';
import HeaderNavSeparator from '../HeaderNavSeparator/HeaderNavSeparator';

const Nav = () => {
    return (
        <nav>
            <ul className={styles.links}>
                <HeaderNavLink navigateTo={'/tasks'} textLink={'Задачи'}/>
                <HeaderNavSeparator />
                <HeaderNavLink navigateTo={'/categories'} textLink={'Категории'}/>
            </ul>
        </nav>
    );
};

export default Nav;
