import React from 'react';
import './App.css';
import CustomTable from './table.js/CustomTable';
import { FORM_TYPE } from './table.js/FormType';
import UsersList from './users-list/UsersList';

class App extends React.Component {
  users = [
    {
      id: 1,
      value: 'sai1',
      status: 'PENDING'
    },
    {
      id: 2,
      value: 'sai2',
      status: 'PENDING'
    },
    {
      id: 3,
      value: 'sai3',
      status: 'PENDING'
    },
    {
      id: 4,
      value: 'sai4',
      status: 'PENDING'
    },
    {
      id: 5,
      value: 'sai',
      status: 'PENDING'
    },
    {
      id: 6,
      value: 'sai',
      status: 'PENDING'
    },
    {
      id: 7,
      value: 'sai',
      status: 'PENDING'
    },
    {
      id: 8,
      value: 'sai',
      status: 'PENDING'
    },
    {
      id: 9,
      value: 'sai',
      status: 'PENDING'
    },
    {
      id: 10,
      value: 'sai',
      status: 'COMPLETED'
    },
    {
      id: 11,
      value: 'sai',
      status: 'COMPLETED'
    },
    {
      id: 12,
      value: 'sai',
      status: 'COMPLETED'
    },
    {
      id: 13,
      value: 'sai',
      status: 'COMPLETED'
    },
    {
      id: 14,
      value: 'sai',
      status: 'COMPLETED'
    },
    {
      id: 15,
      value: 'sai',
      status: 'COMPLETED'
    },
    {
      id: 16,
      value: 'sai',
      status: 'COMPLETED'
    },
    {
      id: 17,
      value: 'sai',
      status: 'COMPLETED'
    },
    {
      id: 18,
      value: 'sai',
      status: 'COMPLETED'
    },
    {
      id: 19,
      value: 'sai',
      status: 'COMPLETED'
    },
    {
      id: 20,
      value: 'sai',
      status: 'COMPLETED'
    },
    {
      id: 21,
      value: 'sai',
      status: 'COMPLETED'
    },
    {
      id: 22,
      value: 'sai',
      status: 'COMPLETED'
    },
    {
      id: 23,
      value: 'sai',
      status: 'COMPLETED'
    },
    {
      id: 24,
      value: 'sai',
      status: 'COMPLETED'
    }
  ];

  headers = [
    {
      title: 'ID',
      mappingId: 'id',
      isEditable: false,
      type: FORM_TYPE.TEXT
    },
    {
      title: 'NAME',
      mappingId: 'value',
      isEditable: false,
      type: FORM_TYPE.TEXT
    },
    {
      title: 'STATUS',
      isEditable: true,
      mappingId: 'status',
      type: FORM_TYPE.SELECT,
      options: [
        {
          value: 'PENDING',
          key: 'PENDING'
        },
        {
          value: 'COMPLETED',
          key: 'COMPLETED'
        },
        {
          value: 'NONE',
          key: 'NONE'
        }
      ]
    }
  ]
  render() {
    return (
      <div>
        <div className="container">
          <div className="text-center">
            <h1>Users list</h1>
            {/* <CustomTable data={this.users} columnHeaders={this.headers}></CustomTable> */}
            <UsersList users={this.users}></UsersList>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
