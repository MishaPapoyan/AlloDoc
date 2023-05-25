import React, {useContext} from 'react';
import doctor from '../../../images/doc.png'
import rectangle from '../../../images/Rectangle.png'
import rectangle1 from '../../../images/Rectangle2.png'
import rectangle2 from '../../../images/Rectangle3.png'
import './signUpToConsultations.css'
import {TranslateContext} from "../../../context/TranslateContext";

const SignUpToConsultations = () => {
    const t = useContext(TranslateContext)

    return (
        <section className='signUp'>
            <div className="info">
                <h2>{t.translate[1].SignUp.OnlineConsultations}</h2>
                <p>

                    {/*{t.translate[1].SignUp.description}*/}
                    Проконсультируйтесь <b>сейчас</b> или по <b>предварительной записи</b> <br/>     со своего компьютера или c помощью нашего приложения,<br/>
                    доступного в <strong>App Store </strong> и <strong> Google Play</strong>
                </p>
                <div className="btns">
                    <button className='sign'>{t.translate[1].SignUp.buttons.signUp}</button>
                    <button className='how-works'>{t.translate[1].SignUp.buttons.howitWorks}</button>
                </div>
            </div>

            <div className="doctor">
                <div className="doc_img">
                    <div className="images">
                        <div><img src={rectangle} alt=""/></div>
                        <div><img src={rectangle1} alt=""/></div>
                        <div><img src={rectangle2} alt=""/></div>
                        <div className='doc'> <img src={doctor} alt=""/></div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default SignUpToConsultations;