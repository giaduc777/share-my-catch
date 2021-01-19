import React from 'react';
import styles from './Resources.module.scss';

const resources: React.FC = () => {
    return(
        <div className={`${styles.Resources} container-fluid`}>
            <div className={`row p-3`}>
                <h4 className={`text-center col-12`}>Resources</h4>
                <ul className={`col-4 bg-white`}>
                    <p>Destinations</p>
                    <li>Uvas Resevoir</li>
                    <li>Chesbro Dam</li>
                    <li>Lexington Resevoir</li>
                </ul>
                <ul className={`col-4 bg-white`}>
                    <p>Regulations</p>
                    <li>Sizes & Limits</li>
                    <li>License</li>
                    <li>Fishing Seasons</li>
                </ul>
                <ul className={`col-4 bg-white`}>
                    <p>Popular Lures</p>
                    <li>Drop Shot</li>
                    <li>Texas Rig</li>
                    <li>Carolina Rig</li>
                </ul>
            </div>
        </div>
    )
}

export default resources;