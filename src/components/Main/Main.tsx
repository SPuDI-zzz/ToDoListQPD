import React, { FC, PropsWithChildren } from 'react';
import styles from './Main.module.css'

const Main: FC<PropsWithChildren> = ({children}) => {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                {children}
            </div>
        </main>
    );
};

export default Main;
