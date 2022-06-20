import React, { useState } from "react";
import classes from './surveypage.module.css';
import Telephone from "./telephone/Telephone";
import Raffle from "./raffle/Raffle";
import SurveyDate from "./suveydate/SurveyDate";
import Recommendation from "./recommendation/Recommendation";
import Comment from "./comment/Comment";
import Personal from "./personalinformation/Personal";
import DropDown from "./dropdown/DropDown";
import Streetaddres from "./streetaddress/StreetAddress";
import CheckBox from './checkbox/CheckBox';

const check = (data) => {

  let problems = "";

  for (const property in data) {
    if(property!=='comment')
    {
      if (data[property] === '') {
        problems = property + "," + problems;
      }
    }
    
  }

  return problems;
}


const cleanform = (event)=>{
  for(let i=0;i<=6;i++)
  {
    event.target[i].value=''
  }

  event.target[7].value='Select Recommendation';

  for(let j=8;j<=17;j++)
  {
    event.target[j].checked=false
  }
  
  for(let k=18;k<=21;k++)
  {
    event.target[k].value=''
  }
}

const SurveyPage = (props) => {


  // Maintaing the values of the first, last, email, zip,
  // address, city, state, dropdown, checkbox, recommendation, telephone, date, raffle 
  const [first, setfirst] = useState('');
  const [last, setlast] = useState('');
  const [email, setemail] = useState('');

  const [zip, setzip] = useState('');
  const [address, setaddress] = useState('');
  const [city, setcity] = useState('');
  const [state, setstate] = useState('');


  const [dropdown, setdropdown] = useState('');

  const [checkbox, setcheckbox] = useState([]);

  const [recommendation, setrecommendation] = useState('');
  const [date, setdate] = useState('');
  const [raffle, setRaffle] = useState('');

  const [telephone, setTelephone] = useState('');
  const [comment, setcomment] = useState('');

  const [error, SetError] = useState('');

  const ResetHandler = (event)=>{
    cleanform(event);
  }

  // Function for the form handler 
  const formHandler = (event) => {

    event.preventDefault();

    const data = {
      firstname: first,
      lastname: last,
      email: email,
      city: city,
      zip: zip,
      state: state,
      address: address,
      date: date,
      telephone: telephone,
      radio: recommendation,
      checkbox: checkbox,
      dropdown: dropdown,
      comment:comment,
      raffle: raffle
    }

    const problem = check(data);


    if (problem === '') {

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      };

      // submitting the form to the backend
      fetch('http://54.91.104.209:30103/feed/submitpost', requestOptions)
        .then(response => {
          
          return response.json()
        })
        .then(data => 
          {
            // getting the response from the backend in the format of json
            // We can get response of different format 
            if(data.message==='Duplicate data')
            {
              SetError("Please do not use same email address or telephone number");             
            }
            else if(data.message==='Wrong Date entered')
            {
              SetError("Please Enter the right date");
            }
            else if(data.message==='Post created successfully!')
            {
              SetError("Thank you for submission, your data is safe with us");
              cleanform(event);
            }
            
          })
        .catch(err => {
          // If any error occured
          cleanform(event);
          SetError('Error occured while saving the data Please enter again');
        })

        
    }
    else {
      SetError(problem + " Unfilled Please fill that");
    }


  }
// THe html content which needed to be displayed on the Survey form 
  return (
    <div className={classes.container}>
      <form id="survey-form" onSubmit={formHandler}>

        <Personal group={classes.formgroup} control={classes.formcontrol}
          changefirst={setfirst}
          changelast={setlast}
          changeemail={setemail} />

        <Streetaddres group={classes.formgroup} control={classes.formcontrol}
          changecity={setcity}
          changestate={setstate}
          changezip={setzip}
          changeaddress={setaddress}
        />
        <DropDown group={classes.formgroup} control={classes.formcontrol} changedropdown={setdropdown}  />
        <CheckBox p={classes.p} state={checkbox} group={classes.formgroup} check={classes.inputcheckbox} clue={classes.clue} changecheckbox={setcheckbox} />
        <Recommendation group={classes.formgroup} radio={classes.inputradio}  changerecom={setrecommendation} />
        <SurveyDate group={classes.formgroup} control={classes.formcontrol}  changedate={setdate} />
        <Raffle group={classes.formgroup} control={classes.formcontrol}  changeraffle={setRaffle} />
        <Telephone group={classes.formgroup} control={classes.formcontrol}  changenumber={setTelephone} />
        <Comment group={classes.formgroup} text={classes.inputtextarea}  changecomment={setcomment} />


        <div className={classes.formgroup}>
          <button type="submit" id="submit" className={classes.submit}>
            Submit
          </button>
        </div>
        <div className={classes.formgroup}>
          <button type="reset" id="reset" className={classes.cancel}>
            Cancel
          </button>
        </div>
        {error !== '' && <label id="fname" className={classes.errorlabel}>{error}</label>}
      </form>
    </div>
  )
}

export default SurveyPage;