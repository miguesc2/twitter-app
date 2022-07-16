import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/main/Home';
import HomeCenterTweetsClickPost from '../components/main/HomeCenter/HomeCenterTweetsClickPost';
import Login from '../components/registrationAndLogin/Login';
import NotFound from './NotFound';
import PrivateRoute from '../components/main/PrivateRoute';
import Profile from '../components/profile/Profile';
import RegistrationPage from '../components/registrationAndLogin/RegistrationPage';
import SignUp from '../components/registrationAndLogin/SignUp';

const App = () => (
  <BrowserRouter>    
    <Switch>
      <Route exact path="/" component={ RegistrationPage } />
      <Route exact path="/signup" component={ SignUp } />
      <Route exact path="/login" component={ Login } />
      <PrivateRoute exact path="/home" component={ Home } />
      <PrivateRoute exact path="/homewatchpost/:postId" component={ HomeCenterTweetsClickPost } />
      <PrivateRoute exact path="/profile/:postsId" component={ Profile } />
      <Route component={ NotFound } />
    </Switch>
  </BrowserRouter>
)

export default App;