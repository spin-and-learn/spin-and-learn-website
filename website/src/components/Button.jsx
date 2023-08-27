import React from 'react'
import { Button as ButtonContainer } from 'antd'

const Button = ({ title, filled = true, height = 45, width = 200, onClick }) => {
    const mainBlue = "#0972CE"
    const white = "#ffffff"
    const background = filled ? mainBlue : white

    return (
        <div className="Button">
            <ButtonContainer id={title} onClick={onClick} className="hover" style={{ background, height, width }} size={"large"}>
                <span className="button-text" style={{ color: filled ? white : mainBlue, fontFamily: 'Inter'  }}>{title}</span>
            </ButtonContainer>
        </div>
    )
}

export default Button