import React, { useState } from 'react';
import SurveyPage from './components/surveypage/SurveyPage';
import GetSurvey from './components/getsurvey/GetSurvey';
import Navbar from './components/navbar/Navbar';
import './App.css'
import HomePage from './components/homepage/HomePage';

const App = () => {

  // Managing the state of the Website
  const [currentpage,SetCurrentPage] = useState('homepage');

// When click on GetsurveyPage Button Change current page to GetsurveyPage
  const GetSurveypageHandler =()=>{

    SetCurrentPage('getsurveypage');

  }
// When click on surveypage Button Change current page to surveypage
  const SurveyPageHandler =()=>{

    SetCurrentPage('surveypage');

  }
  // When click on HomePage Button Change current page to homepage 
  const HomePageHandler = ()=>{
    SetCurrentPage('homepage');
  }

  return (
    <React.Fragment>
    <Navbar clickforHomepage={HomePageHandler}  clickforSurveypage={SurveyPageHandler}  clickforGetSurveypage={GetSurveypageHandler} />
    {currentpage==='homepage' && <HomePage/>}
    {currentpage==='surveypage' && <SurveyPage/>}
    {currentpage==='getsurveypage' && <GetSurvey/>}
    </React.Fragment>
  )

}

export default App;