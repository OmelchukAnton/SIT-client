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
    const { name, id } = this.props;
    return (
      <div className="viewСontact" onClick={this.handleItemClick}>
        <div className="viewСontact__profile">
          <div>
            <img
              className="viewСontact__profile_avatar"
              alt="avatar"
              src={`http://localhost:5000/${id}.jpeg`}
            />
          </div>
          <div>
            <div className="viewСontact__profile_name" >{name}</div>
          </div>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  id: React.PropTypes.string,
  name: React.PropTypes.string,
  onClick: React.PropTypes.func.isRequired,
};

Contact.defaultProps = {
  name: '',
  id: '',
};
