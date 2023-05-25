import React from 'react';
import notification from '../../../images/notification.png'
import './notification.css'
const Notification = ({number}) => {
    return (
        <div className='main'>
            <p className='count'><span >3</span></p>
            <img src={notification} alt=""/>
        </div>
    );
};

export default Notification;