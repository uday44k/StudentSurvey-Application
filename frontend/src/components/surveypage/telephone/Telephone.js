import React from "react";


const Telephone = (props) => {
    
    // Html for the input type of telephone
    // using the TeleRegex for checking the telephone number

    const TeleRegex = new RegExp("^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$");
    const TelephoneHandler = (event)=>{

        let number = event.target.value;
        if(number.length===10)
        {
            if(TeleRegex.test(number)===true)
            {
               
                props.changenumber(number);
            }
            else
            {
                props.changenumber('');
            }
            
        }
        
    }

    return (
        <React.Fragment>
            <div className={props.group}>
                <label id="tellabel" >Telephone-1234567890</label>
                <input onChange={TelephoneHandler} type="tel" name="telephone" id="telephone" className={props.control} placeholder="Phone Number"  minLength={10} maxLength={10}
                    required />
            </div>
        </React.Fragment>
    )
}

export default Telephone;