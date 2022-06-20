import React from "react";
// Html for the SurveyDate
const SurveyDate = (props) => {
   const dateHandler =(event)=>{
    
    props.changedate(event.target.value);
   }

    return (
        <React.Fragment>
            <div className={props.group}>
                <label id="datelabel" >Survey Date</label>
                <input onChange={dateHandler} type="date" name="surveydate" id="surveydate" className={props.control} required />
            </div>
        </React.Fragment>
    )
}

export default SurveyDate;
