import React from 'react'
import { Button, Divider, Radio, Space } from 'antd'

export default ({ title, filled = true, height, width, onClick }) => {
    const mainBlue = "#0972CE"
    const white = "#ffffff"

    return (
        <div className="Button">
            <Space>
                <Button onClick={onClick} className="hover" style={{
                    background: filled ? mainBlue : white,
                    color: filled ? white : mainBlue, marginLeft: 10,
                    height,
                    width
                }} size={"large"}>
                    {title}
                </Button>
            </Space>
        </div>
    )
}