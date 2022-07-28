import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../components/main/Home';
import HomeCenterTweetsClickPost from '../components/main/HomeCenter/HomeCenterTweetsClickPost';
import Intermediary from './Intermediary';
import Login from '../components/registrationAndLogin/Login';
import NotFound from './NotFound';
import PrivateRoute from '../components/main/PrivateRoute';
import Profile from '../components/profile/Profile';
import RegistrationPage from '../components/registrationAndLogin/RegistrationPage';
import SignUp from '../components/registrationAndLogin/SignUp';
import Explore from '../components/explore/Explore';
import Notifications from '../components/notifications/Notifications';
import Messages from '../components/message/Messages';
import Saved from '../components/saved/Saved';
import Lists from '../components/lists/Lists';
import ExploreRight from '../components/explore/ExploreRight';

const App = () => (
  <BrowserRouter>    
    <Switch>
      <Route exact path="/" component={ RegistrationPage } />
      <Route exact path="/signup" component={ SignUp } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/intermediary" component={ Intermediary } />
      
      <PrivateRoute exact path="/home" component={ Home } />
      <PrivateRoute exact path="/homewatchpost/:postId" component={ HomeCenterTweetsClickPost } />
      <PrivateRoute exact path="/profile/:postsId" component={ Profile } />
      <PrivateRoute exact path="/explore" component={ Explore } />
      <PrivateRoute exact path="/explore/:postsId" component={ ExploreRight } />
      <PrivateRoute exact path="/notifications" component={ Notifications } />
      <PrivateRoute exact path="/messages" component={ Messages } />
      <PrivateRoute exact path="/saved" component={ Saved } />
      <PrivateRoute exact path="/lists" component={ Lists } />
      {/* <PrivateRoute exact path="/moreOptions" component={ MoreOptions } /> */}
      
      <Route component={ NotFound } />
    </Switch>
  </BrowserRouter>
)

export default App;