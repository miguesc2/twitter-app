import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/main/Home';
import Login from './components/registrationAndLogin/Login';
import RegistrationPage from './components/registrationAndLogin/RegistrationPage';
import SignUp from './components/registrationAndLogin/SignUp';
import NotFound from './components/NotFound';
//import Api from './components/Api';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ RegistrationPage } />
      <Route exact path="/signup" component={ SignUp } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/home" component={ Home } />
      {/* <Route exact path="/api" component={ Api } /> */}
      <Route component={ NotFound } />
    </Switch>
  </BrowserRouter>
)

export default App;