import React from "react";
import OutputRow from "./outputRow";

const Output = props => {
    return(
        <div>
            <OutputRow  value={props.answer} textSize={{fontSize:'20px', marginTop: '14px'}}/>
            <OutputRow  value={props.user}/>
        </div>
    )
}
export default Output;