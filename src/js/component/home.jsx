import React from "react";
import ReactDom from 'react-dom';
import SimpleCounter from './SimpleCounter.jsx';
//import PropTypes from 'prop-types';


//create your first component
const Home = () => {
	return (
		<SimpleCounter />
		//<PropTypes />
		//<ReactDom />
	);
};

let counter = 0;
 setInterval(function(){
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter);
    console.log(four,three,two,one);

    counter++;
}, 1000);

ReactDOM.render(
	<SimpleCounter digitOne= {one} digitTwo={two} digitThree={three} digitFour={four} />,
	document.querySelector('#app')
);


export default Home;
