import React from 'react'
import { Button as ButtonContainer } from 'antd'

const Button = ({ title, filled = true, height, width, onClick }) => {
    const mainBlue = "#0972CE"
    const white = "#ffffff"

    return (
        <div className="Button">
            <ButtonContainer id={title} onClick={onClick} className="hover" style={{
                background: filled ? mainBlue : white,
                color: filled ? white : mainBlue,
                height: height ? height : 45,
                width: width ? width : 200
            }} size={"large"}>
                <span style={{ color: "white" }}>{title}</span>
            </ButtonContainer>
        </div>
    )
}

export default Button