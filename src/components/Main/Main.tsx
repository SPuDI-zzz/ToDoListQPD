import React, { FC, PropsWithChildren } from 'react';
import styles from './Main.module.css'

const Main: FC<PropsWithChildren> = ({children}) => {
    return (
        <main className={styles.main}>
            <section className={styles.container}>
                {children}
            </section>
        </main>
    );
};

export default Main;
