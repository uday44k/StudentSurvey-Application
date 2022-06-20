import React,{useState} from 'react';
import classes from './GetSurvey.module.css';

//Function for populating the data that we get from the backend
const formdata = (data)=>{

 return data.map(index=>{
    return <div className={classes.boxforform}> 
    <ul  key={index.ID}>
        <li>Firstname : {index.firstname}</li>
        <li>Lastname  : {index.lastname}</li>
        <li>email : {index.email}</li>
        <li>city : {index.city}</li>
        <li>date : {index.date}</li>
        <li>How you recommend this school : {index.dropdown}</li>

        <li>address : {index.address}</li>
        <li>zip  : {index.zip}</li>
        <li>telephone : {index.telephone}</li>
        <li>How you became interested in the University : {index.radio}</li>
        <li>What they liked most about the campus? : {index.checkbox}</li>
        </ul>
        </div>
})
}



const GetSurvey = (props) => {

  // Using the useState for maintaing the date slected by user

  const [getdate,SetDate] = useState('');

  const [data,setData] = useState([]);

  const [nodata, Setnodata] = useState(false);

  const [error,SetError]=  useState(false);


  const dateHandler= (event)=>{
    
    SetDate(event.target.value);

  }

// Button Handler for Getting all data
  const GetAllDataHandler= ()=>{

    // Hitting the backend api using get request to get all the data
    fetch("http://54.91.104.209:30103/feed/getAllpost")
    .then(response=>{
      return response.json();
    })
    .then(result=>{

    if(result.message==='No survey for that Date')
    {
      Setnodata(true);
      setData([]);
    }
    else
    {
      Setnodata(false);
      setData(result.message)
      SetError(false);
    }
    })
    .catch(err=>{
      SetError(true);
      setData([]);
    })
  }

  const formHandler=(event)=>{
    event.preventDefault();

    if(getdate==='')
    return;

    const date={
      crrdate:getdate
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(date)
  };

  
// Sent post request for getting the data of a particular request only 
  fetch('http://54.91.104.209:30103/feed/getpost/', requestOptions)
  .then(response =>response.json())
  .then(answer =>{
    console.log(answer);
    console.log(answer.message);
    if(answer.message==='No survey for that Page')
    {
      Setnodata(true);
      setData([]); 
      SetError(false);
    }
    else
    {
      Setnodata(false);
      setData(answer.message)
      SetError(false);
    }
    
  })
  .catch(err=>{
    SetError(true);
    setData([]);
  })
  }

  // Html for the See survey Page
  return (
    <div>
      
      <div className={classes.boxforform}>
      <form onSubmit={formHandler}>
        <label>Select the data for which you want to see survey </label>
        <input onChange={dateHandler} type="date" required></input>
        <button className={classes.submit} type='submit'>Submit</button>
      </form>
      <button className={classes.submit} onClick={GetAllDataHandler}> Get All Data</button> 
      </div>
      
      {error===true && <label>Error Occured Please try again</label>}
      { nodata===true && <label>No survey for that Date</label>}
      {data.length>0 && data.map(index=>{
    return  <ul  key={index.ID}>
        <li>Firstname : {index.firstname}</li>
        <li>Lastname  : {index.lastname}</li>
        <li>email : {index.email}</li>
        <li>city : {index.city}</li>
        <li>date : {index.date}</li>
        <li>How you recommend this school : {index.dropdown}</li>

        <li>address : {index.address}</li>
        <li>zip  : {index.zip}</li>
        <li>telephone : {index.telephone}</li>
        <li>How you became interested in the University : {index.radio}</li>
        <li>What they liked most about the campus? : {index.checkbox}</li>
        </ul>
})
}

      
    </div>
  )
}
export default GetSurvey;