import React from "react";

function SimpleCounter(props){
    return(<div className="bigCounter"> 
     <div className="calendar"></div>
        <i className="far fa-clock"></i>
    
    
     <div className="four">{props.digitFour}</div>
     <div className="three">{props.digitThree}</div>
     <div className="two">{props.digitTwo}</div>
    <div className="one">{props.digitOne}</div>
    </div>
    )
}


export default SimpleCounter;