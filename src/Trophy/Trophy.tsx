import React from 'react';
import styles from './Trophy.module.scss';
import bass from '../assets/bass.jpg';

const trophy: React.FC = () => {

    return(
        
        <div id="duc" className={`${styles.Trophy} col- m-auto p-3`}>
                <div className={`card d-flex flex-row p-2 justify-content-around`}>
                    <div>
                        <h5>Trophy Fish</h5>
                        <img src={bass} className="card-img-top" alt="bass" style={{width:"5rem"}}></img>
                    </div>
                    <div>
                        <div className="card-body">
                                <p>User Name: Duc Le</p>
                                <p>Location: Uvas Dam</p>
                                <p>Date: 11-8-20</p>
                                <p>Time: Evening</p>
                                <p>Condition: 60F, windy</p>
                                <p>Size: 14 inch</p>
                                <p>Lure Type: Green Spinner</p>
                                <p>Updated: 11-20-20</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default trophy;

