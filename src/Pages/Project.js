import React, { useEffect, useState ,useRef } from 'react';
import './Project.css';
import drone from '../media/bg1.jpg';
import TNR from '../media/tnrlogo.png';
import PWD from '../media/PW_analyser_logo.png';

function Project(){
    // function preview(name){
    //     document.getElementById(name).style.transform = 'rotateY(180deg)';
    // }
    return(
        <div className='projectsbox'>
            {/* <div> */}
                <div id='card1'>
                    <div className='card1front'>
                        <div id='project1card'>
                            <img id='projectsimg' src={drone} alt=''/>
                            <h3 id='projectname'>Night Survilence Drone</h3>
                        </div>
                    </div>
                    <div className='card1back'>
                        <h3>Want to know about the project...?</h3>
                        <div style={{display:'flex',justifyContent:'space-around'}}> 
                            <div style={{cursor:'pointer'}}>Yes</div>
                            <div style={{cursor:'pointer'}}>No</div>
                        </div>
                    </div>
                    
                </div>
            {/* </div> */}
            {/* <div> */}
                <div id='card2'>
                    <div className='card2front'>
                        <div id='project2card'>
                            <img id='projectsimg' src={TNR} alt=''/>
                            <h3 id='projectname'>TN - ROVER</h3>
                        </div>
                    </div>
                    <div className='card2back'>
                        <h3>Want to know about the project...?</h3>
                        <div style={{display:'flex',justifyContent:'space-around'}}> 
                            <div style={{cursor:'pointer'}}>Yes</div>
                            <div style={{cursor:'pointer'}}>No</div>
                        </div>
                    </div>
                    
                </div>
            {/* </div> */}
            {/* <div> */}
                <div id='card3'>
                    <div className='card3front'>
                        <div id='project3card'>
                            <img id='projectsimg' src={PWD} alt=''/>
                            <h3 id='projectname'>Password Analyser</h3>
                        </div>
                    </div>
                    <div className='card3back'>
                        <h3>Want to know about the project...?</h3>
                        <div style={{display:'flex',justifyContent:'space-around'}}> 
                            <div style={{cursor:'pointer'}}>Yes</div>
                            <div style={{cursor:'pointer'}}>No</div>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </div>
    );
}
export default Project;