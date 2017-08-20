import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { BrowserHistory } from 'react-history';
import App from './components/App.jsx';
import HomePage from './components/homepage/HomePage.jsx';
import RegistrationPage from './components/registration/RegistrationPage.jsx';
import Messanges from './components/chatBody/Messanges.jsx';
import ListOfContacts from './components/addContacts/ListOfContacts.jsx';

import './index.scss';

const HomeLayout = () => (
  <App>
    <Route path="/pm/:userId" component={Messanges} />
  </App>
);

render(
  <Router className="App" history={BrowserHistory}>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/pm" component={HomeLayout} />
      <Route path="/reg" component={RegistrationPage} />
      <Route path="/find" component={ListOfContacts} />
    </div>
  </Router>,
  document.getElementById('root'),
);
