import React, { useEffect, useState ,useRef } from 'react';
import './Test.css';
const Test = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let it = 0;
    const hackinterval = setInterval(()=>{
        document.getElementById('profname').innerText = document.getElementById('profname').innerText.split("")
        .map((letter,index) => {
            if(index<it){
                return document.getElementById('profname').dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)]
        })
        .join("");

        if(it>=document.getElementById('profname').dataset.value.length) clearInterval(hackinterval);

        it+=1/3;
    },30);
	return (
		<div style={{height:"100vh",width:"100vw",backgroundColor:"white"}}>
			<h1 data-value="CYBERSECURITY" id='profname'>CYBERSECURITY</h1>
		</div>
	);
};
export default Test;