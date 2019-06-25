import React from 'react';
import './App.css';
import CustomTable from './table.js/CustomTable';
import { FORM_TYPE } from './table.js/FormType';

class App extends React.Component {
  users = [
    {
      id: 1,
      value: 'sai1',
      status: 1
    },
    {
      id: 2,
      value: 'sai2',
      status: 1
    },
    {
      id: 3,
      value: 'sai3',
      status: 1
    },
    {
      id: 4,
      value: 'sai4',
      status: 1
    },
    {
      id: 5,
      value: 'sai',
      status: 1
    },
    {
      id: 6,
      value: 'sai',
      status: 1
    },
    {
      id: 7,
      value: 'sai',
      status: 1
    },
    {
      id: 8,
      value: 'sai',
      status: 1
    },
    {
      id: 9,
      value: 'sai',
      status: 1
    },
    {
      id: 10,
      value: 'sai',
      status: 1
    },
    {
      id: 11,
      value: 'sai',
      status: 1
    },
    {
      id: 12,
      value: 'sai',
      status: 1
    },
    {
      id: 13,
      value: 'sai',
      status: 1
    },
    {
      id: 14,
      value: 'sai',
      status: 1
    },
    {
      id: 15,
      value: 'sai',
      status: 1
    },
    {
      id: 16,
      value: 'sai',
      status: 1
    },
    {
      id: 17,
      value: 'sai',
      status: 1
    },
    {
      id: 18,
      value: 'sai',
      status: 1
    },
    {
      id: 19,
      value: 'sai',
      status: 1
    },
    {
      id: 20,
      value: 'sai',
      status: 1
    },
    {
      id: 21,
      value: 'sai',
      status: 1
    },
    {
      id: 22,
      value: 'sai',
      status: 1
    },
    {
      id: 23,
      value: 'sai',
      status: 1
    },
    {
      id: 24,
      value: 'sai',
      status: 1
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
      isEditable: false,
      mappingId: 'status',
      type: FORM_TYPE.SELECT
    }
  ]
  render() {
    return (
      <div>
        <div className="container">
          <div className="text-center">
            <h1>Users list</h1>
            <CustomTable data={this.users} columnHeaders={this.headers}></CustomTable>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
