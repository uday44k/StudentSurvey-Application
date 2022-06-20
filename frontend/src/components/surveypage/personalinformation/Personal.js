import React from "react";
import { useState } from "react";


// Html for the First, last, email 
// Using the regex for the testing for valid input 
const Personal = (props) => {

  const regName = new RegExp("^[A-Za-z]([-A-Za-z']*[A-Za-z])?$");
  const emailregex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')

  const firstnameHandler = (event) => {

    let firstname = event.target.value;

    if (firstname.length > 0) {
      if (regName.test(firstname) === true) {
        
        props.changefirst(firstname);
      }
      else
      {
        props.changefirst('');
      }
    }



  }

  const lastnameHandler = (event) => {

    let lastname = event.target.value;

    if (lastname.length > 0) {
      if (regName.test(lastname) === true) {
       
        props.changelast(lastname);
      }
      else
      {
        props.changelast('');
      }
    }

  }

  const emailHandler = (event) => {

    let email = event.target.value;
    if (email.includes('@') === true) {
      if (emailregex.test(email) === true) {
       
        props.changeemail(email);
      }
      else
      {
        props.changeemail('');
      }
    }

  }


  return (
    <React.Fragment>
      <div className={props.group}>
        <label id="fname" >First Name</label>
        <input type="text" id="firstname" onChange={firstnameHandler} className={props.control} placeholder="Enter your First name"
          required ></input>
      </div>

      <div className={props.group}>
        <label id="lname" >Last Name</label>
        <input type="text" id="lastname" onChange={lastnameHandler} className={props.control} placeholder="Enter your Last name"
          required />
      </div>

      <div className={props.group}>
        <label id="emaillabel" >Email</label>
        <input type="email" id="email" onChange={emailHandler} className={props.control} placeholder="Enter your email" required />
      </div>
    </React.Fragment>
  )

}

export default Personal;
