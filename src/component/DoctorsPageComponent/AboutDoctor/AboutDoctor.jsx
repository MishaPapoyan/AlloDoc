import React from 'react';
import olga from "../../../images/olga.png"
import './AboutDoctor.css'
import vector from '../../../images/Vector.png'
import appointment from '../../../images/appointment.png'
import education from '../../../images/education.png'
import add from '../../../images/add.png'
import attention from '../../../images/attention.png'
import chat from '../../../images/conversation.png'
import videoCamera from '../../../images/video-camera.png'
import audio from '../../../images/audio.png'
import upload from '../../../images/upload.png'
const AboutDoctor = () => {
    return (
        <div className="All">
        <div className="Main">
            <div className="Info">
                    <a href="#">main <img className='vector-nav' src={vector} alt=""/></a>
                    <a href="#">main <img className='vector-nav' src={vector} alt=""/></a>
                    <a href="#">main <img className='vector-nav' src={vector} alt=""/></a>
                <div className="docs_img">
                   <div className="img">
                       <img src={olga} alt=""/>
                   </div>
                    <div className="content">
                        <h2>Ольга Никитина</h2>
                        <p>Педиатр, Терапевт</p>
                        <p>Стаж 15 лет</p>
                    </div>
                    </div>
                </div>
            <div className="price">
                <p>900 / консультация</p>
                <p>30 минут</p>
            </div>
        </div>

        <div className="specialization">
            <div className="specializationDoctors">
                <div className="div-box">
                    <h3><img className='icon' src={appointment} alt=""/>Ближайшая запись</h3>
                    <p>Вторник 03 Марта</p>
                </div>
                <div className="div-box">
                    <h3><img className='icon' src={education} alt=""/>Образование</h3>
                    <p>1992 - Российский Государственный Университет</p>
                    <br/>
                    <p>1994 - Ординатура по специальности «Педиатрия»</p>
                </div>
                <div className="div-box">
                    <h3><img className='icon' src={add} alt=""/>Специализируется на лечении</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/> tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim <br/> veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <br/> commodo consequat.
                    </p>
                </div>
                <div className="div-box">
                    <h3><img className='icon' src={attention} alt=""/>Дополнительно</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/> tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim <br/> veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <br/> commodo consequat.
                    </p>
                </div>


            </div>
            {/*    <div className="planning">*/}
            {/*        <div className="registrOnline">*/}
            {/*            <div className="header">*/}
            {/*                <h3>Записаться на прием онлайн</h3>*/}
            {/*                <p>Пожалуйста заполните следующую информацию</p>*/}
            {/*            </div>*/}
            {/*            <div className="steps">*/}
            {/*                <div className="box">*/}
            {/*                    <p className='step'>1</p>*/}
            {/*                    <span>Выберите способ связи</span>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*                <div className="communicationMethod">*/}
            {/*                    <button className='btn chat'> <img src={chat} className='btn_icon' alt=""/> Чат</button>*/}
            {/*                    <button className='btn'> <img src={audio} className='btn_icon' alt=""/> Аудио</button>*/}
            {/*                    <button className='btn'> <img src={videoCamera} className='btn_icon' alt=""/> Видео</button>*/}
            {/*                </div>*/}
            {/*            <div className="descriptionProblem">*/}
            {/*                <div className="steps">*/}
            {/*                    <div className="box">*/}
            {/*                        <p className='step'>2</p>*/}
            {/*                        <span>Опишите проблему</span>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <form action="">*/}
            {/*                    <textarea>*/}

            {/*                    </textarea>*/}
            {/*                </form>*/}
            {/*            </div>*/}
            {/*            <div className="steps">*/}
            {/*                <div className="box">*/}
            {/*                    <p className='step'>3</p>*/}
            {/*                    <span>Прикрепить файлы <img src={upload} alt=""/> (необязательно)</span>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="consultationTime">*/}
            {/*                <div className="steps">*/}
            {/*                    <div className="box">*/}
            {/*                        <p className='step'>3</p>*/}
            {/*                        <span> Выберите время консультации</span>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className="month">*/}
            {/*                    <img className='change_month' src={vector} alt=""/>*/}
            {/*                    <img className='change_month left' src={vector} alt=""/>*/}
            {/*                    <div className="march">*/}
            {/*                        <span>Вт</span>*/}
            {/*                        <span>Ср</span>*/}
            {/*                        <span>Чт</span>*/}
            {/*                        <span>Пт</span>*/}
            {/*                        <span>Сб</span>*/}
            {/*                    </div>*/}

            {/*                    <div className="march_days">*/}
            {/*                        <span>03</span>*/}
            {/*                        <span>04</span>*/}
            {/*                        <span>05</span>*/}
            {/*                        <span>06</span>*/}
            {/*                        <span>07</span>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className="hours">*/}
            {/*                    <div className="tuesday">*/}
            {/*                        <button>12:00</button>*/}
            {/*                        <button>13:00</button>*/}
            {/*                        <button>16:00</button>*/}
            {/*                        <button>17:00</button>*/}
            {/*                        <button>19:00</button>*/}
            {/*                    </div>*/}
            {/*                    <div className="wednesday">*/}
            {/*                        <button>12:00</button>*/}
            {/*                        <button>13:00</button>*/}
            {/*                        <button>-</button>*/}
            {/*                        <button>-</button>*/}
            {/*                        <button>-</button>*/}
            {/*                    </div>*/}
            {/*                    <div className="thursday">*/}
            {/*                        <button>12:00</button>*/}
            {/*                        <button>13:00</button>*/}
            {/*                        <button>16:00</button>*/}
            {/*                        <button>17:00</button>*/}
            {/*                        <button>-</button>*/}
            {/*                    </div>*/}
            {/*                    <div className="friday">*/}
            {/*                        <button>12:00</button>*/}
            {/*                        <button>-</button>*/}
            {/*                        <button>16:00</button>*/}
            {/*                        <button>17:00</button>*/}
            {/*                        <button>19:00</button>*/}
            {/*                    </div>*/}
            {/*                    <div className="saturday">*/}
            {/*                        <button>12:00</button>*/}
            {/*                        <button>-</button>*/}
            {/*                        <button>16:00</button>*/}
            {/*                        <button>17:00</button>*/}
            {/*                        <button>19:00</button>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <span className="showAll">Показать все расписании <img className='vector_btn' src={vector} alt=""/></span>*/}
            {/*    </div>*/}
            {/*        <button className='SignUp'>Записаться</button>*/}
            {/*</div>*/}



        </div>
        </div>
    );
};

export default AboutDoctor;


