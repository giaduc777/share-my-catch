import React from 'react';
import styles from './Recommend.module.scss';
import bass from '../assets/bass.jpg';

const recommend: React.FC = () => {
        return(
             <div className={`${styles.Recommend} container-fluid col-12`}>
                    <div className={`row m-auto p-3`}>
                        <h4 className={`m-auto`}>Best Catches</h4>
                        <div className={`col-12 bg-info pt-2 pb-2`}>
                            <div className={`card d-flex flex-row justify-content-around pt-2 pb-2`}>
                                <div>
                                <p>@userName</p>
                                    <img src={bass} className="card-img-top" alt="bass" style={{width:"5rem"}}></img>
                                </div>
                                <div>
                                <p>@userName</p>
                                    <img src={bass} className="card-img-top" alt="bass" style={{width:"5rem"}}></img>
                                </div>
                                <div>
                                <p>@userName</p>
                                    <img src={bass} className="card-img-top" alt="bass" style={{width:"5rem"}}></img>
                                </div>
                            </div>
                        </div>
                        <div className={`col-12 bg-success pt-2 pb-2`}>
                            <div className={`card d-flex flex-row justify-content-around pt-2 pb-2`}>
                                <div>
                                <p>@userName</p>
                                    <img src={bass} className="card-img-top" alt="bass" style={{width:"5rem"}}></img>
                                </div>
                                <div>
                                <p>@userName</p>
                                    <img src={bass} className="card-img-top" alt="bass" style={{width:"5rem"}}></img>
                                </div>
                                <div>
                                <p>@userName</p>
                                    <img src={bass} className="card-img-top" alt="bass" style={{width:"5rem"}}></img>
                                </div>
                            </div>
                        </div>
                    </div>
             </div>
        )
}

export default recommend;