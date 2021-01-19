import React from 'react';
import Recommend from '../Recommend/Recommend';
import Resources from '../Resources/Resources';
import Main from '../Main/Main';
import styles from './Container.module.scss';

const container: React.FC = () => {
        return(
            <div className={`${styles.Container} container-fluid`}>
                     <div className="row">
                        <Main />
                        <Recommend />
                        <Resources />
                     </div>
            </div>
        )
    
}

export default container;