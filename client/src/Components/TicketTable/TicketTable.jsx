
import { Button, Space, Table } from 'antd';
import  React from 'react';
import "./styles.css"


const columns = [
    {
        title: '#',
        width: 100,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
    },
    {
        title: 'Task ID',
        width: 100,
        dataIndex: 'Task ID',
        key: 'Task ID',
        fixed: 'left',
    },
    { title: 'Assigned Staff', dataIndex: 'address', key: '1' },
    { title: 'Start Date', dataIndex: 'address', key: '2' },
    { title: 'End Date', dataIndex: 'address', key: '3' },
    { title: 'Last Reply', dataIndex: 'address', key: '4' },
    { title: 'Priority', dataIndex: 'address', key: '5' },
    { title: 'Status', dataIndex: 'address', key: '6' },

    {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => ( <Space size="middle">
         <Button ghost type="primary" style={{ borderRadius: "10px" }}>Edit</Button>
        <Button ghost type="primary" danger style={{borderRadius:"10px"}}>Delete</Button>
      </Space>)
    },
];

const data = [
    {
        key: '1',
        name: '#'

    },
    {
        key: '2',
        name: '#'
    },
];


const TicketTable = () => {
    return (
        <div>
              <Table style={{border:"10px"}} columns={columns} dataSource={data} bordered />
            
        </div>
    );
};

export default TicketTable;
