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
      return <div className="chatNav"> News </div>;
    }

    return (
      <div className="chatNav">
        <Link to="/pm">
          <div className="chatNav__toNews">
            <button onClick={this.handleBackClick} />
          </div>
        </Link>
        <div className="chatNav__toUser"> Send a message {this.props.contact} </div>
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
