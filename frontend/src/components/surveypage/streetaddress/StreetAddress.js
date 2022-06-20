import React from "react";

const Streetaddres = (props) => {
// Html for the city, state, zip, address input
// Also using the regex for that 
    const cityregex = new RegExp("^[a-zA-Z',.-]{1,25}$"); 
    const stateregex = new RegExp("^[a-zA-Z',. -]{1,25}$");
    const zipregex = new RegExp("^[0-9]{5}?$");
    const addressregex = new RegExp("^[a-zA-Z0-9,',. -]{1,45}$");

    const addressHandler = (event) => {

        let address = event.target.value;

        if (addressregex.test(address) === true) {
            
        

            props.changeaddress(address);
        }
        else
        {
            props.changeaddress('');
        }
    }


    const ciyHandler = (event) => {

        let city = event.target.value;

        if (cityregex.test(city) === true) {
            
            props.changecity(city);
        }
        else
        {
            props.changecity('');
        }


    }
    const stateHandler = (event) => {

        let state = event.target.value;

        if (stateregex.test(state) === true) {

            props.changestate(state);
        }
        else
        {
            props.changestate('');
        }

    }
    const zipHandler = (event) => {

        let zip = event.target.value;
        if (zip.length === 5) {
            if (zipregex.test(zip) === true) {
                props.changezip(zip);
            }
            else
            {
                props.changezip('');
            }
        }


    }


    return (
        <React.Fragment>
            <div className={props.group}>
                <label id="address" >Street address</label>
                <input type="text" onChange={addressHandler} name="streetaddres" id="streetaddres" className={props.control} placeholder="Enter your streetaddres" required />
            </div>

            <div className={props.group}>
                <label id="cityname" >City</label>
                <input type="text" onChange={ciyHandler} name="city" id="city" className={props.control} placeholder="Enter your city name" required />
            </div>

            <div className={props.group}>
                <label id="state">State</label>
                <input type="text" onChange={stateHandler} name="statename" id="statename" className={props.control} placeholder="Enter your state name"
                    required />
            </div>

            <div className={props.group}>
                <label id="ziplabel" >Zip</label>
                <input type="text" onChange={zipHandler} name="zip" id="zip" className={props.control} placeholder="Enter your zip" required />
            </div>

        </React.Fragment>
    )

}

export default Streetaddres