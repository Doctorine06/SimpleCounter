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

 setInterval(function)(){
    const four = Math.floor(counter/10000);
    const three = Math.floor(counter/1000);
    const two = Math.floor(counter/100);
    const one = Math.floor(counter/10);
    console.log(four,three,two,one);

    // ReactDOM.render(
        <SimpleCounter digitOne= {CountQueuingStrategy.indexOf()} />,
        document.querySelector('#app')
    //  )
}


export default SimpleCounter;