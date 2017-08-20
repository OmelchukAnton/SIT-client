import React, { Component } from 'react';
import { getMessages } from '../../services/messages.js';
import './Chats.scss';

export default class OutputMessages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: '',
    };
    // this.writeMessage = this.writeMessage.bind(this);
    // this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount() {
    getMessages().then((data) => {
      this.setState({
        outgoing: data.myMessage,
        incoming: data.Incoming,
      });
    });
  }


  render() {
    return (
      <div className="correspondence">
        <div className="mainUser">
          {this.state.outgoing}
        </div>
        <div className="otherUser">
          {this.state.incoming}
        </div>
      </div>
    );
  }
}

OutputMessages.propTypes = {
};
OutputMessages.defaultProps = {
};
