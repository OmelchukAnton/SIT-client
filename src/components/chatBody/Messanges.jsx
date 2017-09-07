import React from 'react';
import InputMessage from './InputMessage.jsx';
import OutputMessages from './OutputMessages.jsx';
import './Chats.scss';

export default function Messanges(props) {
  const user = JSON.parse(localStorage.getItem('userData') || '{}');
  return (
    <div className="chat__content">
      <div className="chat__design">
        <div className="host">
          {user.firstname}
          <div className="sphere"> ava </div>
        </div>
        <OutputMessages />
        <div className="companion">
          {props.match.params.chatId}
          <div className="sphere"> ava </div>
        </div>
      </div>
      <InputMessage />
    </div>
  );
}
Messanges.propTypes = {
  match: React.PropTypes.func.isRequired,
};
