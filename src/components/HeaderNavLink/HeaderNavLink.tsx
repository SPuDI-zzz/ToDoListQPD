import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './HeaderNavLink.module.css'

interface HeaderNavLinkProps {
    navigateTo: string;
    textLink: string;
}

const HeaderNavLink: FC<HeaderNavLinkProps> = ({navigateTo, textLink}) => {
    return (
        <li>
            <NavLink 
                className={styles.link}
                to={navigateTo}>
                {textLink}
            </NavLink>
        </li>
    );
};

export default HeaderNavLink;
