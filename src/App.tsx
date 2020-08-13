import React from 'react';
import './App.css';
// import './Style/Style.scss';

import { Register } from './Components/Pages/Register/Register';
import { Login } from './Components/Pages/Login/Login';
import { User } from './Components/User/User';

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <>
        {/* <Register /> */}
        {/* <Login /> */}
        <User />
      </>
    )
  }
}