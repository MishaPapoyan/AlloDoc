import data from '../../../local/data.json'
import './CurrnetConsultations.css'
import React, {useContext} from "react";
import {TranslateContext} from "../../../context/TranslateContext";
import {Link} from "react-router-dom";
const CurrnetConsultations = ({children}) => {
    const t = useContext(TranslateContext)
    // const [data, setData] = useState([]);
    //
    // useEffect(() => {
    //     fetch("http://localhost:3002/results")
    //         .then(response => response.json())
    //         .then(jsonData => setData(jsonData))
    //         .catch(error => console.error('Error: ' + error));
    // }, []);

    const newData = data.results.slice(0,3)
    console.log(newData)
    return (

        <div>
            {children}
            {/*{newData.map((item)=>{*/}
            {/*    return (*/}
            {/*        <div key={item.id} className="info_consultations">*/}
            {/*            <div className="border">*/}
            {/*            <p>{item.first_name} {item.last_name}</p>*/}
            {/*            <img style={{width:140, height:140}} src={item.profile_image} alt='thbgrfv'/>*/}
            {/*                <div className="stats">*/}
            {/*                    <div className="left_side">*/}
            {/*                        <p>{*/}
            {/*                            item.user_categories.map((item2) =>{*/}
            {/*                                return(*/}
            {/*                                    <div>*/}
            {/*                                        <p>{item2.category.title.ru}</p>*/}
            {/*                                        <p>Стаж с {item.excperience_start_year}</p>*/}
            {/*                                    </div>*/}
            {/*                                )*/}
            {/*                            })*/}
            {/*                        }*/}
            {/*                        </p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}


            {/*            </div>*/}
            {/*        </div>*/}
            {/*    )*/}
            {/*})}*/}
            <div className="nav">
                <Link to={'/notes'}><p className='myRecs'>{t.translate[3].CurrnetConsultations.h2}</p></Link>
                <div className="days">
                    <p className='filter'>{t.translate[3].CurrnetConsultations.TheUpcomingOnes}</p>
                    <p className='filter'>{t.translate[3].CurrnetConsultations.Past}</p>
                    <p className='filter'>{t.translate[3].CurrnetConsultations.Canceled}</p>
                </div>
            </div>
            {data.results.map((item)=>{
                return (
                <div className="info_consultations">
                    <div className="border">
                        <div className="stats">
                            <div className="left_side">
                                <p>{item.first_name} {item.last_name}</p>
                                <p>16:00</p>
                                <p>{t.translate[3].CurrnetConsultations.meansOfCommunication}</p>
                            </div>
                            <p className='bron'>{t.translate[3].CurrnetConsultations.Reservation}</p>
                        </div>
                        <div className="infoDoctor">
                            <div className="doctor_name">
                                <div className="img">
                                    <img src={item.profile_image} alt=""/>
                                </div>
                                <div className="content">
                                    <h2>{item.first_name} {item.last_name}</h2>
                                    <p>
                                        {item.user_categories.map((item2)=>{
                                            return item2.category.title.ru
                                        })}
                                    </p>
                                    <p>
                                        {item.user_categories.map((item2)=>{
                                            return <p> Стаж с {item.excperience_start_year}</p>
                                        })}
                                    </p>
                                </div>
                            </div>
                            <div className="recording">
                                <Link to={"/doctor"}><button>{t.translate[3].CurrnetConsultations.ViewTheRecord}</button></Link>
                                {/*<button></button>*/}
                                <span>{t.translate[3].CurrnetConsultations.SeeTheDecision}</span>
                            </div>
                        </div>
                    </div>
                </div>
                )
            })}



        </div>
    );
};

export default CurrnetConsultations;