import React, { useState, useEffect } from 'react';
import './Slide.css';
import { picarr } from './Certlist';
import { Link } from 'react-router-dom';
export var curplace;
const SlideShow = ({name}) => {
	const [active, setActive] = useState(2);
	useEffect(() => {
		loadPlace();
	}, [active]);

	const loadPlace = () => {
		let cur = 0;
		const pitems = document.querySelectorAll('.fpslide .pcard');

		pitems[active].style.transform = `none`;
		pitems[active].style.zIndex = 11;
		pitems[active].style.filter = 'none';
		pitems[active].style.opacity = 1;
		curplace = picarr[active];

		for (let i = active + 1; i < pitems.length; i++) {
			cur++;
			pitems[i].style.transform = `translateX(${120 * cur}px) scale(${1 - 0.2 * cur}) perspective(16px) rotateY(-1deg)`;
			pitems[i].style.zIndex = -cur + 10;
			pitems[i].style.filter = 'blur(5px)';
			pitems[i].style.opacity = cur > 2 ? 0 : 0.6;
		}

		cur = 0;

		for (let i = active - 1; i >= 0; i--) {
			cur++;
			pitems[i].style.transform = `translateX(${-120 * cur}px) scale(${1 - 0.2 * cur}) perspective(16px) rotateY(1deg)`;
			pitems[i].style.zIndex = -cur + 10;
			pitems[i].style.filter = 'blur(5px)';
			pitems[i].style.opacity = cur > 2 ? 0 : 0.6;
		}
	};

	const handleNextClick = () => {
		setActive((prevActive) => (prevActive + 1 < picarr.length ? prevActive + 1 : prevActive));
	};

	const handlePrevClick = () => {
		setActive((prevActive) => (prevActive - 1 >= 0 ? prevActive - 1 : prevActive));
	};

	return (
		<div className="fpslide">
		{picarr.map((val)=>{
			return(
				<div className='pcard'>
                    <div className='pic'><img id='pimg' className='ppic' src={val.img} alt="PlacePicture"/></div>
                    <h9 id='pn'>{val.title}</h9>
                    <br></br>
                    <Link to='/place' id='dlink' onClick={()=>curplace = picarr[active]} style={{color:"green",textDecoration:'none'}}>&lt; preview /&gt;</Link>
				</div>
			);
		})}
		<button id="Pnext" onClick={handleNextClick}>&gt;</button>
		<button id="Pprev" onClick={handlePrevClick}>&lt;</button>
		</div>
	);
};

export default SlideShow;