import React from 'react';
import { render } from 'react-dom';
import { HashRouter  as Router, Route } from 'react-router-dom';
import { HashHistory } from 'react-history';
import App from './components/App.jsx';
import MainPage from './components/homepage/MainPage.jsx';
import RegistrationPage from './components/registration/RegistrationPage.jsx';
import ChatContainer from './components/chatBody/ChatContainer.jsx';
import ListOfContacts from './components/addContacts/ListOfContacts.jsx';
import './index.scss';

const HomeLayout = () => (
  <App>
    <Route path="/pm/:chatId" component={ChatContainer} />
  </App>
);

render(
  <Router className="App">
    <div>
      <Route exact path="/" component={MainPage} />
      <Route path="/pm" component={HomeLayout} />
      <Route path="/reg" component={RegistrationPage} />
      <Route path="/find" component={ListOfContacts} />
    </div>
  </Router>,
  document.getElementById('root'),
);
