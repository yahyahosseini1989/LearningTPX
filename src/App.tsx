import React from 'react';
import './App.css';
import './Style/Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Pages/Header/Navigation';
import { BrowserRouter , Route } from "react-router-dom";
import { User } from './Components/Pages/User/User';
import { Register } from './Components/Pages/Register/Register';
import MyDropDown from './Components/Pages/Others/DropDown/Dropdown';
import Charge from './Components/Pages/Charge/Charge';
import MyForm from './Components/Pages/Others/Forms/MyForm';
import MyForm2 from './Components/Pages/Others/Forms/MyForm2';
import Hook from './Components/Pages/Others/Hook/Hook';
import { FormikElement } from './Components/Pages/Others/FormikElement/FormikElement';
import FormikElement2 from './Components/Pages/Others/FormikElement/FormikElement2';


export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navigation />
          <Route component={User} path="/Users" exact />
          <Route component={Register} path="/Register" exact />
          <Route component={MyDropDown} path="/Input" exact />
          <Route component={Charge} path="/Charge" exact  />
          <Route component={MyForm} path="/MyForm" exact  />
          <Route component={MyForm2} path="/MyForm2" exact  />
          <Route component={Hook} path="/Hook" exact  />
          <Route component={FormikElement} path="/Formik" exact  />
          <Route component={FormikElement2} path="/Formik2" exact  />
        </BrowserRouter>
      </>
    )
  }
}