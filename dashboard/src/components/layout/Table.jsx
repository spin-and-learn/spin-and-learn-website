/* eslint-disable import/no-anonymous-default-export */
import { Table as AntTable } from 'antd'
import Title from 'antd/lib/skeleton/Title'
import React from 'react'


const Table = ({ data, columns, onChange, components, onCancel, pagination }) => {
    return (
        <div id='one' className="Table">
            <AntTable
                components={{
                    body: {
                        cell: components,
                    },
                }}
                onChange={onChange}
                columns={columns}
                dataSource={data}
                bordered
                rowClassName="editable-row"
                pagination={pagination ? { onChange: onCancel } : false}
            />
        </div>
    )
}

export default Table

// Virtual DOM 

