// "use client";
// import React, { useState, useRef, useEffect } from 'react';

// const Test = async() => {
//   const [colour, setColour] = useState("red");
//   const [car, setCar] = useState({
//     name: "BMW",
//     model: "2022",
//     colour: "red"
//   });
//   const inputRef = useRef();
//   //fetch request
//     const fetchData = async() => {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         const data = await response.json();
//         console.log(data);
//     }


//   useEffect(() => {
//     if (inputRef.current) {
//       console.log(inputRef.current.value);
//     }
//   }, []);

//   return (
//     <div>
//       <h1>Colour is {colour}</h1>
//       <input id="sample" ref={inputRef} defaultValue="Type here" />

//       <button onClick={() => setColour(colour === "red" ? "blue" : "red")}>
//         Change Text Colour
//       </button>

//       <button onClick={() => setCar(prevCar => ({
//         ...prevCar,
//         colour: "blue"
//       }))}>
//         Change Car Colour
//       </button>
//     </div>
//   );
// };

// export default Test;
