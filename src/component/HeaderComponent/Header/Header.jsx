import React, {useContext, useState} from 'react';
import logo from "../../../images/logo.png"
import avatar  from  "../../../images/avatar.png"
import vector from '../../../images/Vector.png'
import './header.css'
import Notification from "../../../component/HeaderComponent/Notification/Notification.jsx";
import PopUp from "../../../component/HeaderComponent/PopUp/PopUp.jsx";
import ru from "../../../local/ru.json";
import en from "../../../local/en.json";
import {TranslateContext} from "../../../context/TranslateContext";
const Header = ({setlen,len}) => {
    const t = useContext(TranslateContext)
    const [show, setShow] = useState(false)

    const changeLenguage = (e)=>{
        const leng = e.target.innerText;
        if (leng === "RU"){
            setlen(ru)
        }else {
            setlen(en)
        }
    }

    const changeState = ()=>{
        setShow(!show)
    }



    return (
        <header>
            <div className="logo">
                <img src={logo} alt=""/>
            </div>
            <div className="all">
                <nav className="navbar">
                    <ul>
                        <li>{t.translate[0].header.ul_howUse}</li>
                        <li>{t.translate[0].header.ul_MyRecords}</li>
                        <li>{t.translate[0].header.ul_ToMakeAnAppointmentWithADoctor}</li>
                        <Notification />
                    </ul>

                </nav>
                <div className="userInfo">

                    <div className="avatar">
                        <img src={avatar} alt=""/>
                    </div>
                    <div className="userSettings"onClick={changeState}>
                        <span>{t.translate[0].header.userName}</span>
                        <img className={show? 'vector' : null} src={vector} alt="" />
                    </div>
                    <PopUp show={show}/>


                </div>
            </div>
            <div className="len">
                <span className={len === 'RU' ? 'border__bottom' : ''} onClick={changeLenguage} >RU</span>
                <span className={len === 'EN' ? 'border__bottom' : ''} onClick={changeLenguage}>EN</span>
            </div>
        </header>
    );
};

export default Header;