import React from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import SignUpToConsultations from "./SignUpToConsultations/SignUpToConsultations";
import AboutDocs from "./AboutDocs/AboutDocs";
import CurrnetConsultations from "./CurrnetConsultations/CurrnetConsultations";
import Notification from "./Notification/Notification";
import PopUp from "./PopUp/PopUp";

const HeaderAll = () => {
    return (
        <div>
            <SignUpToConsultations/>
            <AboutDocs/>
            <CurrnetConsultations/>
        </div>
    );
};

export default HeaderAll;