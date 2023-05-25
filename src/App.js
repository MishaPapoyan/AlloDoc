import Header from "../src/component/HeaderComponent/Header/Header.jsx";
import AboutDocs from "../src/component/HeaderComponent//AboutDocs//AboutDocs.jsx";
import CurrnetConsultations from "../src/component/HeaderComponent//CurrnetConsultations/CurrnetConsultations.jsx";
import Footer from "../src/component/HeaderComponent/Footer/Footer.jsx";
import {useContext, useState} from "react";
import {TranslateContext} from "./context/TranslateContext";
import en from './local/en.json'
import ru from './local/ru.json'
import SignUpToConsultations from "./component/HeaderComponent/SignUpToConsultations/SignUpToConsultations";
import AboutDoctor from "./component/DoctorsPageComponent/AboutDoctor/AboutDoctor";
import BalanceInfo from "./component/MyBalanceComponent/BalanceInfo/BalanceInfo";
import MyNotes from "./component/MyNotesComponent/MyNotes";
import {Outlet, Route, Routes} from "react-router-dom";
import HeaderAll from "./component/HeaderComponent/HeaderAll";
import DoctorPage from "./component/DoctorsPageComponent/AboutDoctor/DoctorPage";
import MyBalanceComponent from "./component/MyBalanceComponent/BalanceInfo/MyBalanceComponent";



function App() {
    const [len, setLen] = useState(ru)
    const leng = len === ru ? 'RU': "EN"


  return (
      <>
          <TranslateContext.Provider value={len}>
              <Header setlen={setLen} len={leng}/>
              <Routes>
                  <Route path={'/'} element={<HeaderAll/>}/>
                  <Route path='/doctor' element={<DoctorPage/>}/>
                  <Route path='/balance' element={<MyBalanceComponent/>}/>
                  <Route path='/notes' element={<MyNotes/>}/>
              </Routes>


              <Outlet/>
              <Footer/>
          </TranslateContext.Provider>

      </>
    // </div>
  );
}

export default App;
