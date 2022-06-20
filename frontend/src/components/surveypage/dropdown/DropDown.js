import React from 'react';

// Html for the DropDown
const DropDown = (props) => {

    const dropdownHandler = (event)=>{
        if(event.target.value!=='Select Recommendation')
        {
           
            props.changedropdown(event.target.value);
        }
        
    }

    return (
        <React.Fragment>
            <div className={props.formgroup}>
                <p>How you recommend this school</p>
                <select onChange={dropdownHandler} id="dropdown" className={props.control} required>
                    <option >Select Recommendation</option>
                    <option value="verylikely">Very likely</option>
                    <option value="Likely">Likely</option>
                    <option value="Unlikely">Unlikely</option>
                </select>
            </div>
        </React.Fragment>
    )
}

export default DropDown;