import React from 'react';
import Trophy from '../Trophy/Trophy';
import styles from './Main.module.scss';
import flyfishing2 from '../assets/flyFishing2.jpg';

const main: React.FC = () => {
    return(
        <div className={styles.main}>
            <img src={flyfishing2} alt="trout"></img>
            <Trophy />
        </div>
    )
}

export default main;