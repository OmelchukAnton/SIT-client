import React from 'react';
import './Chats.scss';

const ChatWindow = (props) => {
  if (!props.contact) {
    return <div className="nav__over_chatwindow"> Feed </div>;
  }
  return (
    <div className="nav__over_chatwindow">
      <button className="return_back"> Back </button>
      <div className="chat_with_user"> Send a message {props.contact.name} </div>
    </div>
  );
};

export default ChatWindow;

ChatWindow.propTypes = {
  name: React.PropTypes.string,
  contact: React.PropTypes.string,
};
ChatWindow.defaultProps = {
  name: '',
  contact: '',
};
