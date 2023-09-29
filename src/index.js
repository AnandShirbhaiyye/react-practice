// import ReactDOM from 'react-dom/client';
// const root = ReactDOM.createRoot(document.getElementById('root'));

// function Card(){

//   const randomNumber = Math.random();
//   return(
//     <div>
//       <h1>Card {randomNumber}</h1>
//     </div>
//   )
// }
// root.render(
//   <>
//   <Card/>
//   <Card/>
//   <Card/>
//   <Card/>
//   </>
// )



// import ReactDOM from 'react-dom/client';
// const root = ReactDOM.createRoot(document.getElementById('root'));

// function Greeting(props){
//   console.log(props)
//   return(
//     <div>
//       <h1>I am {props.name} from {props.city}.</h1>
//     </div>
//   )
// }
// root.render(
//   <>
//   <Greeting name = "Anand" city = "Pune"/>
//   </>
// )

// import ReactDOM from 'react-dom/client';
// const root = ReactDOM.createRoot(document.getElementById('root'));

// function Greeting(props){
//   const {name, city} = props;
//   return(
//     <div>
//       <h1>I am {name} from {city}.</h1>
//       <hr/>
//     </div>
//   )
// }
// root.render(
//   <>
//   <Greeting name = "Anand" city = "Nagpur"/>
//   <Greeting name = "Vaishnavi" city = "Ahmednagar"/>
//   <Greeting name = "Suraj" city = "Bhandara"/>
//   <Greeting name = "Pinki" city = "Pune"/>
//   </>
// )


// import ReactDOM from 'react-dom/client';
// const root = ReactDOM.createRoot(document.getElementById('root'));

// function Greeting(props){
//   const {name, city, age} = props;
//   return(
//     <div style={{border: '5px double black', backgroundColor: 'lightblue', borderRadius: '10px', padding: '10px', margin: '10px'}}>
//       <h1 style={{color: 'tomato'}}>I am {name} from {city}. I am {age} years old.</h1>
//     </div>
//   )
// }
// root.render(
//   <>
//   <Greeting name = "Anand" city = "Nagpur" age = "23"/>
//   <Greeting name = "Vaishnavi" city = "Ahmednagar" age = "22"/>
//   <Greeting name = "Suraj" city = "Bhandara" age = "23"/>
//   <Greeting name = "Pinki" city = "Pune" age = "20"/>
//   </>
// )


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import Home from './components/Home/Home';
import ConfigurationUI from './components/ConfigurationUI/ConfigurationUI';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <Home/> */}
   <ConfigurationUI/>
  </React.StrictMode>
);
reportWebVitals();




