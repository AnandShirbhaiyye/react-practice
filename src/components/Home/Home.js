// import React, {useState} from "react";
// import './Home.css';

// function Home() {

// const [fullName, setFullName] = useState('')
//   return (
//     <>
//     <div>
//     <form>
//     {fullName}
//     <input  
//      className="input-field"
//      type="text"
//      placeholder="Full Name"
//      onChange={(e)=>{
//         setFullName(e.target.value)
//      }} />
//     </form>
//     </div>
//     </>
//   );
// }

// export default Home;


// import React, {useState} from "react";

// function Home() {
//  // handling ratio buttons
// const [gender, setGender] = useState('male')
//   return (
//     <>
//     <div>
//     <form>
//     <h2>Selected Gender: {gender}</h2>
//     <input
//      type="radio"
//      name="gender"
//      value="male"
//      onChange={(e)=>{
//         if(e.target.checked){
//             setGender(e.target.value)
//         }
//      }}
//      checked={gender==="male"}
//     />Male

//     <br />

//     <input
//      type="radio"
//      name="gender"
//      value="female"
//       onChange={(e)=>{
//         if(e.target.checked){
//             setGender(e.target.value)
//         }
//      }}
//      checked={gender==="female"}
//     />Female
//     </form>
//     </div>
//     </>
//   );
// }

// export default Home;

// import React, {useState} from "react";

// function Home() {
//  // handling check boxes
// const [mobile, setMobile] = useState(false);
// const [laptop, setLaptop] = useState(false);
// const [smartwatch, setSmartWatch] = useState(false);
//   return (
//     <>
//     <div>
//     <form>
//     {mobile ? 'Mobile is checked' : 'Mobile is not checked'} <br/>

//     {laptop ? 'Laptop is checked' : 'Laptop is not checked'} <br/>

//     {smartwatch ? 'SmartWatch is checked' : 'SmartWatch  is not checked'} <br/>
//     <input 
//     type="checkbox"
//     value="mobile"
//     checked={mobile}
//     onChange={(e)=>{
//         setMobile(e.target.checked);
//     }}
//      /> Mobile <br/>

//     <input
//     type="checkbox" 
//     value="laptop"
//     checked={laptop}
//     onChange={(e)=>{
//         setLaptop(e.target.checked);
//     }}
//      /> Laptop <br/>

//     <input 
//     type="checkbox" 
//     value="smartwatch"
//     checked={smartwatch}
//     onChange={(e)=>{
//         setSmartWatch(e.target.checked);
//     }}
//     /> Smartwatch <br/>

//     </form>
//     </div>
//     </>
//   );
// }

// export default Home;

// import React,  { useState } from 'react'

// function Home() {

//     const [iceCream, setIceCream] = useState('chocolate');
//   return (
//     <div>
//       <form>
//         <select value={iceCream}
//         onChange={(e)=>{
//           setIceCream(e.target.value)  
//         }}>
//             <option value="chocolate">Chocolate</option>
//             <option value="strawberry">Strawberry</option>
//             <option value="vanilla">Vanilla</option>
//         </select>
//         <h1>Selected IceCream : {iceCream}</h1>
//       </form>
//     </div>
//   )
// }

// export default Home;

// import React, {useState, useEffect} from "react";

// function Home() {
//  // handling check boxes
// const [devices, setDevices] = useState([]);

// useEffect(()=>{
//    console.log(devices);
// },[devices]);

// const handleCheck = (e)=>{
//     if(e.target.checked){
//         setDevices([...devices, e.target.value]);
//     }
//     else{
//         const indexToBeDeleted = devices.indexOf(e.target.value);
//         devices.splice(indexToBeDeleted, 1);
//         setDevices([...devices]);
//     }
// }

//   return (
//     <>
//     <div>
//     <form>
//     <input 
//     type="checkbox"
//     value="mobile"
//     onChange={handleCheck}
//      /> Mobile <br/>

//     <input
//     type="checkbox" 
//     value="laptop"
//     onChange={handleCheck}
//      /> Laptop <br/>

//     <input 
//     type="checkbox" 
//     value="smartwatch"
//     onChange={handleCheck}
//     /> Smartwatch <br/>

//     </form>
//     </div>
//     </>
//   );
// }

// export default Home;

// import React from 'react';

// function MyComponent() {
//   return (
//     <div className="container">
//       <button type="button" class="btn btn-primary p-3">Primary</button>
//     </div>
//   );
// }

// export default MyComponent;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div>
      <p>This is a <FontAwesomeIcon icon={faHeart} /> icon.</p>
    </div>
  );
}

export default App;