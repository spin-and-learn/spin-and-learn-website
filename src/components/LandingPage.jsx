import React from 'react'
import Button from './Button'
import LandingImg from "../assets/img/landing.png"

const LandingPage = () => {

	const onClickButton = (e) => {
		console.log(e.target.innerText)
	}

	return (
		<div className='LandingPage' >
			<img src={LandingImg} alt="LandingImg" />
			<div className="info">
				<h1 >Welcome to Spin and Learn  <br />Table Tennis For All Schools</h1>
				<div className="buttons">
					<Button width={120} onClick={onClickButton} filled={false} title={"District"} />
					<Button width={120} onClick={onClickButton} filled={false} title={"Students"} />
					<Button width={120} onClick={onClickButton} filled={false} title={"Leaders"} />
				</div>
			</div>
		</div>
	)
}

export default LandingPage