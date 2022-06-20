import React from "react";


// Html for the checkbox
const CheckBox = (props) => {

 const checkboxHandler=(event)=>{

  const isChecked = event.target.checked;

        if(isChecked){
          props.changecheckbox((state)=>{
            return[...state,event.target.attributes.value.value]
          })
        }else{
            let index = props.state.indexOf(event.target.attributes.value.value);
            props.state.splice(index, 1);
            props.changecheckbox(props.state);
        } 

        
  }

  return (
    <React.Fragment>
      <div className={props.group}>
        <p>
          What they liked most about the campus?
          <span className={props.clue}>(Check all that apply)</span>
        </p>

        <label><input onChange={checkboxHandler} name="prefer" value="students" type="checkbox" className={props.check} />students</label>
        <label><input onChange={checkboxHandler} name="prefer" value="location" type="checkbox" className={props.check} />location</label>
        <label><input onChange={checkboxHandler} name="prefer" value="campus" type="checkbox" className={props.check} />campus</label>
        <label><input onChange={checkboxHandler} name="prefer" value="atmosphere" type="checkbox" className={props.check} />atmosphere</label>
        <label><input onChange={checkboxHandler} name="prefer" value="dorm rooms" type="checkbox" className={props.check} />dorm rooms</label>
        <label><input onChange={checkboxHandler} name="prefer" value="sports" type="checkbox"  className={props.check} />sports</label>
      </div>
    </React.Fragment>
  )
}

export default CheckBox;