import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import { HashHistory } from 'react-history';
import App from './components/app.jsx';
import Homepage from './components/homepage/homepage.jsx';
import Registration from './components/registration/registration.jsx';
import Chat from './components/chat/chat.jsx';
import AddContacts from './components/addContacts/addContacts.jsx';
import './index.scss';

const HomeLayout = () => (
  <App>
    <Route path="/pm/:chatId" component={Chat} />
  </App>
);

render(
  <Router className="App" history={HashHistory}>
    <div>
      <Route exact path="/" component={Homepage} />
      <Route path="/pm" component={HomeLayout} />
      <Route path="/reg" component={Registration} />
      <Route path="/find" component={AddContacts} />
    </div>
  </Router>,
  document.getElementById('root'),
);
