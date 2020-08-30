import React from 'react';
import './App.css';
// import './Style/Style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Register } from './Components/Pages/Register/Register';
import { Login } from './Components/Pages/Login/Login';
import { User } from './Components/User/User';
import Todo from './Components/Pages/Todo/Todo';
import Test from './Components/Pages/Todo/Test';
import Dropdown from './Components/Pages/Others/DropDown/Dropdown';
import Navigation from './Components/Pages/Others/Header/Navigation';



export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <>
      <Navigation />
        {/* <Register /> */}
        {/* <Login /> */}
        <User />
        {/* <Dropdown /> */}
        {/* <Test /> */}
        {/* <Todo /> */}
      </>
    )
  }
}