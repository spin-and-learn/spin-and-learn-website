import React, { useState } from 'react'
import { Dropdown, Space } from 'antd'
import { MdExpandCircleDown } from 'react-icons/md'

const DropdownContainer = ({ items, title }) => {
    const [open, setIsOpen] = useState(false)

    const DropdownItems = (data = []) => {
        const result = []
        data.forEach((item, index) => {
            result.push(
                {
                    key: index + 1,
                    label: (
                        <a rel="noopener noreferrer" href={`${item.path}`}>
                            {item.title}
                        </a>
                    )
                }
            )
        })
        return result
    }

    return (
        <Dropdown onOpenChange={(value) => setIsOpen(value)} arrow placement="bottom" menu={{ items: DropdownItems(items), title }} >
            <span onClick={(e) => e.preventDefault()}>
                <Space>
                    <span className="hover dropdown-title nav-link" style={{ fontSize: 16 }}>
                        {title + " "}
                        <span>
                            <MdExpandCircleDown style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }} size={18} />
                        </span>
                    </span>
                </Space>
            </span>
        </Dropdown>
    )
}

export default DropdownContainer