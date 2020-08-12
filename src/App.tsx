import React from 'react';
import './App.css';
import { Register } from './Components/Pages/Register/Register';

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <>
        <Register />
      </>
    )
  }
}