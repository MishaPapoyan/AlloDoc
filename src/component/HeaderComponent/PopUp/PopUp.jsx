import React, {useContext, useState} from 'react';
import './PopUp.css'
import user from '../../../images/user.png'
import credit from '../../../images/credit.png'
import FAQ from '../../../images/FAQ.png'
import logout from '../../../images/logout.png'
import {TranslateContext} from "../../../context/TranslateContext";
import {Link} from "react-router-dom";
const PopUp = ({show}) => {
    const t = useContext(TranslateContext)
    return (
        <div className={show ? 'active': 'popup'}>
            <div className="modal">
                <span><img src={user} alt="" className='icons'/>{t.translate[5].userProfile.myPage}</span>
                <hr/>
                <Link to={'/balance'}><span><img src={credit} alt="" className='icons'/>{t.translate[5].userProfile.upBalanse}</span></Link>
                <hr/>
                <span><img src={FAQ} alt="" className='icons'/>{t.translate[5].userProfile.FAQ}</span>
                <hr/>
                <span><img src={logout} alt="" className='icons'/>{t.translate[5].userProfile.LogOut}</span>
            </div>


        </div>
    );
};

export default PopUp;