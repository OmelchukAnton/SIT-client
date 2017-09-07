import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Chats.scss';

export default class ChatWindow extends Component {
  constructor(props) {
    super(props);

    this.handleBackClick = this.handleBackClick.bind(this);
  }

  handleBackClick() {
    this.props.onClick(this.props.contact);
  }

  render() {
    if (!this.props.contact) {
      return <div className="nav_over_chatwindow"> News </div>;
    }

    return (
      <div className="nav_over_chatwindow">
        <Link to="/pm">
          <div className="return__back">
            <button onClick={this.handleBackClick}> back </button>
          </div>
        </Link>
        <div className="chat_with_user"> Send a message {this.props.contact} </div>
      </div>
    );
  }
}


ChatWindow.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  contact: React.PropTypes.string,
};
ChatWindow.defaultProps = {
  contact: '',
};
