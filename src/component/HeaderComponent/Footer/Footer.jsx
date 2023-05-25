import React, {useContext} from 'react';
import logo from '../../../images/logo.png'
import instagram from '../../../images/instagram.png'
import facebook from '../../../images/facebook.png'
import youtube from '../../../images/youtube.png'
import mail from '../../../images/mail.png'
import location from '../../../images/location.png'
import time from '../../../images/time.png'
import phone from '../../../images/phone.png'
import apple from '../../../images/apple.png'
import googlePlay from '../../../images/googleplay.png'
import {TranslateContext} from "../../../context/TranslateContext";
import './Footer.css'
const Footer = () => {
    const t = useContext(TranslateContext)
    return (
        <footer>
            <div className='about_us'>
                <div className="logo"><img src={logo} alt=""/></div>
                <p>
                    {t.translate[4].footer.aboutUs1} <br/>
                    {t.translate[4].footer.aboutUs2} <br/>
                    <br/><br/>
                    {t.translate[4].footer.aboutUs3} <br/>
                    {t.translate[4].footer.aboutUs4}
                </p>
                <div className="social">
                    <span><img src={instagram} alt=""/></span>
                    <span><img src={facebook} alt=""/></span>
                    <span><img src={youtube} alt=""/></span>
                </div>
                <button><img src={apple} alt=""/>Get It On the App Store</button>
                <button><img src={googlePlay} alt=""/>Get It On Google Play</button>
            </div>
            <div className='instructions'>
                <p>{t.translate[4].footer.howUse}</p>
                <p>{t.translate[4].footer.FAQ}</p>
                <p>{t.translate[4].footer.forDocs}</p>
                <p>{t.translate[4].footer.aboutService}</p>
                <p>{t.translate[4].footer.contact}</p>
                <p>{t.translate[4].footer.TermsOfUse}</p>
            </div>
            <div className='contact'>
                <div className="box">
                    <img src={mail} alt=""/>
                    <p>allodoc@mail.com</p>
                </div>
                <div className="box">
                    <img src={location} alt=""/>
                    <p>{t.translate[4].footer.address}</p>
                </div>
                <div className="box">
                    <img src={time} alt=""/>
                    <p>{t.translate[4].footer.toWorkSchedule}</p>
                </div>
                <div className="box">
                    <img src={phone} alt=""/>
                    <p>8 800 555 35 35</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;