import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Contact from './Contact.jsx';

import './ContactStyle.scss';

export default class ContactList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: '',
    };

    this.handleAddNewChange = this.handleAddNewChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleSubmit() {
    this.props.onAddChange(this.state.contacts);
  }

  handleAddNewChange(event) {
    this.setState({
      contacts: event.target.value,
    });
  }

  handleItemClick(contact) {
    this.props.onItemClick(contact);
  }


  render() {
    if (this.props.contacts.length === 0) {
      return <div>загрузка контактов..</div>;
    }

    return (
      <div className="contacts__list">
        <div className="info__users">
          {this.props.contacts.map( // TODO: вынести в отдельный метод
            contact =>
              <div className="selected__user">
                <Link to={`/pm/${contact.name}`}>
                  <Contact
                    name={contact.name}
                    avatar={contact.avatar}
                    message={contact.message}
                    time={contact.time}
                    contact={contact}
                    key={contact.id}
                    onClick={this.handleItemClick}
                  />
                </Link>
              </div>,
            )}
        </div>
        <input
          type="text"
          placeholder="login"
          value={this.state.contacts}
          onChange={this.handleAddNewChange}
        />

        <button onClick={this.handleSubmit}> Add New Contact </button>

      </div>
    );
  }
}
ContactList.propTypes = {
  contacts: React.PropTypes.string,
  onAddChange: React.PropTypes.func.isRequired,
  onItemClick: React.PropTypes.func.isRequired,
};
ContactList.defaultProps = {
  contacts: '',
};
