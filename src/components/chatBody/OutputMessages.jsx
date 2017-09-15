import React, { Component } from 'react';
import { getMessages } from '../../services/messages.js';
import './Chats.scss';

export default class OutputMessages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    getMessages().then((data) => {
      this.setState({
        messages: data,
      });
    });
  }

  renderMessages() {
    const user = JSON.parse(localStorage.getItem('userData') || '{}');

    return this.state.messages.map(message => (
      <div className={message.whoSend === user.firstname ? 'view__messagesHost' : 'view__messages'}>
        <fieldset className="messageContent">
          <legend className="whoSend"> {message.whoSend} </legend>
          <div className="textMessage">
            {message.text}
          </div>
          <div className="timeMessage">
            {message.sendTime}
          </div>
        </fieldset>
      </div>
    ));
  }

  render() {
    return (
      <div className="correspondence">
        {this.renderMessages()}
      </div>
    );
  }
}

OutputMessages.propTypes = {
};
OutputMessages.defaultProps = {
};
