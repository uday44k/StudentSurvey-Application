import React from "react";

const Recommendation = (props) => {

    // Html for the Radio button
    const RadioButtonHandler = (event)=>{

        props.changerecom(event.target.defaultValue);

    }
    
    return (
        <React.Fragment>
            <div className={props.group}>
                <p>How you became interested in the University</p>
                <label><input onChange={RadioButtonHandler} name="user-recommend" value="friends" type="radio" className={props.radio}  />friends</label>
                <label><input onChange={RadioButtonHandler} name="user-recommend" value="television" type="radio" className={props.radio} />television</label>

                <label><input onChange={RadioButtonHandler} name="user-recommend" value="Internet" type="radio" className={props.radio} />Internet</label>

                <label><input onChange={RadioButtonHandler} name="user-recommend" value="other" type="radio" className={props.radio} />other</label>
            </div>
        </React.Fragment>
    )
}

export default Recommendation;