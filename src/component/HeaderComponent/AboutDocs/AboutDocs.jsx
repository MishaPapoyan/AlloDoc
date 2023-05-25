import React, {useContext} from 'react';
import object from '../../../images/OBJECTS.png'
import './AboutDocs.css'
import {TranslateContext} from "../../../context/TranslateContext";


const AboutDocs = () => {
    const t = useContext(TranslateContext)
    return (
        <section className='AboutDocs'>
            <div className="image">
                <img src={object} alt=""/>
            </div>
            <div className="AboutUs">
                <h2>{t.translate[2].SignUpToConsultations.ToMakeAnAppointmentWithADoctor}</h2>
                <p>{t.translate[2].SignUpToConsultations.h2}</p>
                <ul>
                    <li>{t.translate[2].SignUpToConsultations.ul_admission}у</li>
                    <li>{t.translate[2].SignUpToConsultations.ul_experience}т</li>
                    <li>{t.translate[2].SignUpToConsultations.ul_recommendation}</li>
                </ul>

                <span className='registr'>{t.translate[2].SignUpToConsultations.signUp}</span>

            </div>
        </section>
    );
};

export default AboutDocs;

