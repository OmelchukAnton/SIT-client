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
      <div className="block">
        <div className="contacts__list">
          <div className="info__users">
            {this.props.contacts.map( // TODO: вынести в отдельный метод
              (contact, i) =>
                <div className="selected__user" key={i}>
                  <Link to={`/pm/${contact.firstname}`}>
                    <Contact
                      name={contact.firstname + ' ' + contact.lastname}
                      // lastname={contact.name}
                      avatar={contact.avatar}
                      message={contact.message}
                      time={(contact.time || '').toString()}
                      contact={contact}
                      key={contact.id}
                      onClick={this.handleItemClick}
                    />
                  </Link>
                </div>,
              )}
          </div>
          <div className="position_add_contact">
            <div className="circle"> + </div>
          </div>
        </div>
        <div className="add_contact">
          <input
            type="text"
            placeholder="login"
            value={this.state.contacts}
            onChange={this.handleAddNewChange}
          />
          <button onClick={this.handleSubmit}> Add New Contact </button>
        </div>
      </div>
    );
  }
}
ContactList.propTypes = {
  contacts: React.PropTypes.array,
  onAddChange: React.PropTypes.func.isRequired,
  onItemClick: React.PropTypes.func.isRequired,
};
ContactList.defaultProps = {
  contacts: [],
};
