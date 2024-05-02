// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './DogPics.css';

// function DogPics() {
//     const [dogbreed,setBreed] = useState("random");
//     const [dogImage,setdogpic] = useState(null);


//     const fetchData = async () =>{
//         try {
//             const response = await axios.get(`https://dog.ceo/api/breeds/image/random${dogdata}`);
//             setdogpic(respponse.data.data);
//         } catch (error) {
//             console.error('Error fetching user data:', error);
//         }
//     }


//     return (
//         <div>
//             <h1>Dog Pics</h1>
//             <div></div>
//             <h3>Scenario 1 : On Page load</h3>
//             <label>Select a breed : </label>
//             <div class="dropdown">
//                 <button class="dropbtn">Dropdown</button>
//                 <div class="dropdown-content">
//                     <a href="#">Random</a>
//                     <a href="#">Beagle</a>
//                     <a href="#">Dalmatin</a>
//                     <a href="#">Husky</a>
//                 </div><br></br>
//             <img src='' alt='dog pics'></img>
//                 <button type='submit'>Next</button>
//             </div>
//         </div>
//     )
// }
// export default DogPics;