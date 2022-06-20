import React from "react";

const RadioButton = (props) => {

    // Html for the radioButton
    return (
        <React.Fragment>
            <div className="form-group">
                <p>How you became interested in the University</p>
                <label>
                    <input name="user-recommend" value="friends" type="radio" className="input-radio" checked />friends</label>
                <label>
                    <input name="user-recommend" value="television" type="radio" className="input-radio" />television</label>

                <label><input name="user-recommend" value="Internet" type="radio" className="input-radio" />Internet</label>

                <label><input name="user-recommend" value="other" type="radio" className="input-radio" />other</label>
            </div>
        </React.Fragment>
    )

}

export default RadioButton;