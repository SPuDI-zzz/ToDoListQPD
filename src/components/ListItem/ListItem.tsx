import React, { FC, PropsWithChildren } from 'react';
import styles from './ListItem.module.css'

interface ListItemProps {
    onEdit: () => void;
    onDelete: () => void;
}

const ListItem:FC<PropsWithChildren<ListItemProps>> = ({children, onEdit, onDelete}) => {
    return (
        <div className={styles.container}>
            <div className={styles.leftBlock}>
                {children}
            </div>
            <div className={styles.rightBlock}>
                <button 
                    type='button'
                    onClick={onEdit}
                    className={styles.btnEdit}>        
                </button>
                <button 
                    type='button'
                    onClick={onDelete}
                    className={styles.btnDelete}>
                </button>
            </div>
        </div>
    );
};

export default ListItem;
