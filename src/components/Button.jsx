import React from 'react'
import { Button } from 'antd'

export default ({ title, filled = true, height, width, onClick }) => {
    const mainBlue = "#0972CE"
    const white = "#ffffff"

    return (
        <div className="Button">
            <Button id={title} onClick={onClick} className="hover" style={{
                background: filled ? mainBlue : white,
                color: filled ? white : mainBlue,
                height: height ? height : 45,
                width: width ? width : 200
            }} size={"large"}>
                {title}
            </Button>
        </div>
    )
}
