import React, { Component } from 'react';
import './ContactStyle.scss';

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick() {
    this.props.onClick(this.props.contact);
  }

  render() {
    const { avatar, name, message, time } = this.props;
    return (
      <div className="view__contact" onClick={this.handleItemClick}>
        <div className="profile__contact">
          <div className="ava">
            <img className="avatar" alt="avatar" src={avatar} />
          </div>
          <div>
            <div className="name" >{name}</div>
            <div className="message">{message}</div>
            <div className="time">{time}</div>
          </div>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  avatar: React.PropTypes.string,
  name: React.PropTypes.string,
  message: React.PropTypes.string,
  time: React.PropTypes.string,
  contact: React.PropTypes.string,
  onClick: React.PropTypes.func.isRequired,
};
Contact.defaultProps = {
  avatar: '',
  name: '',
  message: '',
  time: '',
  contact: '',
};
