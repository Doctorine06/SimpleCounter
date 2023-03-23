import PropTypes from "prop-types";
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
    );
}

SimpleCounter.propTypes = {
    // You can declare that a prop is a specific JS primitive. By default, these
    // are all optional.
    digitFour: number,
    digitThree: number,
    digitTwo: number,
    digitOne: number,
}

let counter = 0;
 setInterval(function(){
    const four = Math.floor(counter/10000);
    const three = Math.floor(counter/1000);
    const two = Math.floor(counter/100);
    const one = Math.floor(counter/10);
    console.log(four,three,two,one);
    // render your react
ReactDOM.render(
        <SimpleCounter digitOne= 
        {CountQueuingStrategy.indexOf(digitOne)} />,
        document.querySelector('#app')
   );
 }, 1000);


export default SimpleCounter;