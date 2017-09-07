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
    return this.state.messages.map(message => (
      <div className="view__messages">
        <fieldset className="textMessage">
          <legend className="timeMessage"> {message.sendTimeOrDate} </legend>
          {message.textMessage}
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
