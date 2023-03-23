import {number} from "prop-types";
import React from "react";
import PropTypes from 'prop-types';

function SimpleCounter(props){
    return(<div className="bigCounter"> 
     <div className="calendar"></div>
        <i className="far fa-clock"></i>
    
    
     <div className="four">{props.digitFour}</div>
     <div className="three">{props.digitThree}</div>
     <div className="two">{props.digitTwo}</div>
    <div className="one">{props.digitOne}</div>
    </div>
    );
}

SimpleCounter.propTypes = {
    // You can declare that a prop is a specific JS primitive. By default, these
    // are all optional.
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number
};


    // render your react


export default SimpleCounter;