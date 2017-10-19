import React, { Component } from 'react';
import './ContactStyle.scss';

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick() {
    this.props.onClick(this.props.name);
  }

  render() {
    const { avatar, name, message, time } = this.props;
    return (
      <div className="viewСontact" onClick={this.handleItemClick}>
        <div className="viewСontact__profile">
          <div>
            <img className="viewСontact__profile_avatar" alt="avatar" src={avatar} />
          </div>
          <div>
            <div className="viewСontact__profile_name" >{name}</div>
            <div className="viewСontact__profile_message">{message}</div>
            <div className="viewСontact__profile_time">{time}</div>
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
  onClick: React.PropTypes.func.isRequired,
};

Contact.defaultProps = {
  avatar: '',
  name: '',
  message: '',
  time: '',
};
