import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
//import Api from './components/Api';
import LoginPage from './components/registrationAndLogin/LoginPage';
import RegistrationPage from './components/registrationAndLogin/RegistrationPage';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ RegistrationPage } />
      <Route exact path="/loginpage" component={ LoginPage } />
      {/* <Route exact path="/api" component={ Api } /> */}
      <Route component={ NotFound } />
    </Switch>
  </BrowserRouter>
)

export default App;