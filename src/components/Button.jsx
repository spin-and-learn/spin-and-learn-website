import React from 'react'
import { Button, Divider, Radio, Space } from 'antd'

export default () => {
    const mainBlue = "#0972CE"
    const white = "#ffffff"

    return (
        <div className="Button">
            <Space>
                <Button className="hover" style={{ background: mainBlue, color: white, marginLeft: 10 }} size={"large"}>
                    Get Program
                </Button>
            </Space>
        </div>
    )
}
