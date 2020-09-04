import React from 'react';
import './App.css';
// import './Style/Style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Pages/Others/Header/Navigation';
import { BrowserRouter , Route,HashRouter } from "react-router-dom";
import { User } from './Components/User/User';
import { Register } from './Components/Pages/Register/Register';
import Input from './Components/Pages/Others/Input/Input';
import MyDropDown from './Components/Pages/Others/DropDown/Dropdown';



export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navigation />
          <Route component={Register} path="/" exact  />
          <Route component={User} path="/Users" exact />
          <Route component={Input} path="/Input" exact />
          <Route component={MyDropDown} path="/Input/MyDropDown" exact />
        </BrowserRouter>
      </>
    )
  }
}