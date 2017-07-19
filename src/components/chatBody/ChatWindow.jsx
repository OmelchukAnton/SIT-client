import React from 'react';
import { Link } from 'react-router-dom';
import './Chats.scss';

const ChatWindow = (props) => {
  if (!props.contact) {
    return <div className="nav_over_chatwindow"> News </div>;
  }
  return (
    <div className="nav_over_chatwindow">
      <Link to="/pm">
        <div className="return__back">
          <button> - return </button>
        </div>
      </Link>
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
