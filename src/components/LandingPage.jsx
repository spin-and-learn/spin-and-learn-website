import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'
import LandingImg from "../assets/img/landing.jpeg"
import { useWindowScroll } from 'react-use';

const LandingPage = () => {
	const [scale, setScale] = useState(1);
	const { y } = useWindowScroll();

	useEffect(() => {
		const windowHeight = window.innerHeight;
		const scrollHeight = document.body.scrollHeight - windowHeight;
		const scrollPosition = y / scrollHeight;
		const maxScale = 1.1;
		const minScale = 1;

		const newScale = minScale + (maxScale - minScale) * scrollPosition;
		setScale(newScale);
	}, [y]);

	return (
		<div className='LandingPage' >
			<div >
				<img
					src={LandingImg}
					alt={"alt"}
					className="scale-image"
					style={{ transform: `scale(${scale})` }}
				/>
			</div>
			<div className="info">
				<h1 >Welcome to Spin and Learn  <br />Table Tennis For All Schools</h1>
				<div className="buttons">
					{["District", "Students", "Leaders"].map((title, key) => (
						<Button key={key} width={120} onClick={() => window.location.href = title.toLowerCase()} filled={false} title={title} />
					))}
				</div>
			</div>
		</div>
	)
}

export default LandingPage