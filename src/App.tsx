import React from 'react';
import './App.css';
import { Register } from './Components/Pages/Register/Register';
import { Login } from './Components/Pages/Login/Login';

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <>
        <Register />
        <Login />
      </>
    )
  }
}