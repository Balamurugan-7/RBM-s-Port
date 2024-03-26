import React, { useEffect, useState ,useRef } from 'react';
import './Temp1.css';
import eh from '../media/Ethical_Hacking_logo.jpg';
import wd from '../media/Web_Development_logo.png';
const Temp1 = () => {
	return (
		<div className="book">
			<input type="checkbox" id="c1" />
			<input type="checkbox" id="c2" />
			<input type="checkbox" id="c3" />
			<div id="cover">
				<img src={eh} alt="Cover" />
			</div>
			<div className="flip-book">
				<div className="flip" id="p1">
					<div className="front">
						<h2>Ethical Hacking</h2>
						<p>@Hackup Technology,Coimbatore</p>
						<label className="next-btn" htmlFor="c1">Next</label>
					</div>
					<div className="back">
						<img src={wd} alt="Page 2" />
						<label className="back-btn" htmlFor="c1">Back</label>
					</div>
				</div>
				<div className="flip" id="p2">
					<div className="front">
						<h2>Web Development</h2>
						<p>@Durga Tech,Coimbatore</p>
						<label className="next-btn" htmlFor="c2">Next</label>
					</div>
					<div className="back">
						<img src={eh} alt="Page 3" />
						<label className="back-btn" htmlFor="c2">Back</label>
					</div>
				</div>
				<div className="flip" id="p3">
					<div className="front">
						<h2>Hacking</h2>
						<p>Hack</p>
						<label className="next-btn" htmlFor="c3">Next</label>
					</div>
					<div className="back">
						<div style={{transform:'rotate(-45deg)',width:'fit-content',transformOrigin:'center'}}> <h1 style={{fontSize:'large',width:"100%",marginTop:'60%'}}>Learning Continues...</h1></div>
						<label className="back-btn" htmlFor="c3">Back</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Temp1;
