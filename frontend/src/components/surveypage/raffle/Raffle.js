import React from "react";

const Raffle = (props) => {
// Html for the Raffle input
    const RaffleHandler= (event)=>{
        let raffle= event.target.value;
        
        if(raffle.length>0)
        {
            
            props.changeraffle(raffle);
        }
        
    }

    return (
        <React.Fragment>
            <div className={props.group}>
                <label id="rafflelabel" >Raffle</label>
                <input type="text" onChange={RaffleHandler}  name="raffle" id="raffle" className={props.control} placeholder="Enter your raffle" required />
            </div>
        </React.Fragment>
    )
}

export default Raffle;