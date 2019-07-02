import React from 'react';
import './App.css';
import UsersList from './postlogin/users-list/UsersList';
class App extends React.Component {

  obj = [
    {
      dob: '30-june-2019',
      email: 'saichoclate@gmail.com',
      experience: 3,
      gender: 'male',
      id: 1,
      isTrainer: true,
      name: 'sai1',
      userid: '1',
      phoneNumber: '9542754461',
      fitness_types: 'FITNESS',
      followers: [],
      following: [],
      ratings: 0,
      updatedAt: '',
      referalCode: '',
      profile_pics: [],
      display_pic: {},
      certificates: [],
      workOutWithMePrice: 100,
      personalTrainingPrice: 100,
      workOutWithMeEnabled: true,
      personalTrainingEnabled: true,
      myPartners: [],
      showInviteFriends: true,
      trainer_activation: false,
      workOutWithMePriceUpdatedAt: '',
      personalTrainingPriceUpdatedAt: '',
      isBlocked: 'ACTIVE'
    },
    {
      dob: '30-june-2019',
      email: 'mymail@gmail.com',
      experience: 3,
      gender: 'male',
      id: 1,
      isTrainer: true,
      name: 'sai2',
      userid: '99',
      phoneNumber: '9542754461',
      fitness_types: 'FITNESS',
      followers: [],
      following: [],
      ratings: 0,
      updatedAt: '',
      referalCode: '',
      profile_pics: [],
      display_pic: {},
      certificates: [],
      workOutWithMePrice: 100,
      personalTrainingPrice: 100,
      workOutWithMeEnabled: true,
      personalTrainingEnabled: true,
      myPartners: [],
      showInviteFriends: true,
      trainer_activation: false,
      workOutWithMePriceUpdatedAt: '',
      personalTrainingPriceUpdatedAt: '',
      isBlocked: 'ACTIVE'
    },
    {
      dob: '30-june-2019',
      email: 'imgmail@gmail.com',
      experience: 3,
      gender: 'male',
      id: 1,
      isTrainer: true,
      name: 'sai3',
      userid: '3',
      phoneNumber: '8124545444',
      fitness_types: 'FITNESS',
      followers: [],
      following: [],
      ratings: 0,
      updatedAt: '',
      referalCode: '',
      profile_pics: [],
      display_pic: {},
      certificates: [],
      workOutWithMePrice: 100,
      personalTrainingPrice: 100,
      workOutWithMeEnabled: true,
      personalTrainingEnabled: true,
      myPartners: [],
      showInviteFriends: true,
      trainer_activation: false,
      workOutWithMePriceUpdatedAt: '',
      personalTrainingPriceUpdatedAt: '',
      isBlocked: 'BLOCKED'
    },
    {
      dob: '30-june-2019',
      email: 'zigzag@gmail.com',
      experience: 3,
      gender: 'male',
      id: 1,
      isTrainer: true,
      name: 'sai3',
      userid: '4',
      phoneNumber: '9542754461',
      fitness_types: 'FITNESS',
      followers: [],
      following: [],
      ratings: 0,
      updatedAt: '',
      referalCode: '',
      profile_pics: [],
      display_pic: {},
      certificates: [],
      workOutWithMePrice: 100,
      personalTrainingPrice: 100,
      workOutWithMeEnabled: true,
      personalTrainingEnabled: true,
      myPartners: [],
      showInviteFriends: true,
      trainer_activation: false,
      workOutWithMePriceUpdatedAt: '',
      personalTrainingPriceUpdatedAt: '',
      isBlocked: 'ACTIVE'
    },
    {
      dob: '30-june-2019',
      email: 'saichoclate@gmail.com',
      experience: 3,
      gender: 'male',
      id: 1,
      isTrainer: true,
      name: 'sai',
      userid: '5',
      phoneNumber: '9542754461',
      fitness_types: 'FITNESS',
      followers: [],
      following: [],
      ratings: 0,
      updatedAt: '',
      referalCode: '',
      profile_pics: [],
      display_pic: {},
      certificates: [],
      workOutWithMePrice: 100,
      personalTrainingPrice: 100,
      workOutWithMeEnabled: true,
      personalTrainingEnabled: true,
      myPartners: [],
      showInviteFriends: true,
      trainer_activation: false,
      workOutWithMePriceUpdatedAt: '',
      personalTrainingPriceUpdatedAt: '',
      isBlocked: 'BLOCKED'
    }
  ]
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
  render() {
    return (
      <div>
        <div className="container">
          <div className="text-center">
            <h1>Users list</h1>
            <UsersList users={this.obj}></UsersList>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
