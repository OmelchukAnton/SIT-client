import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { BrowserHistory } from 'react-history';
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
  <div>Tests</div>,
  document.getElementById('root'),
);
