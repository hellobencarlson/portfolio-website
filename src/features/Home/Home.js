import React from 'react';
import tree from './tree.jpg';
import sky from './sky.jpg';
import styles from './Home.module.css';

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.header}>
                <h1> Ben Carlson</h1>
                <h2>Front-End Software Engineering</h2>
            </div>
            <div className={styles.boxContainer}>
                <div className={styles.boxes}>
                    Projects
                </div>
                <div className={styles.boxes}>
                    About Me
                </div>
            </div>
             
        </main>
      
    )
}