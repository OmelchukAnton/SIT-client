import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Contact from './Contact.jsx';
import './ContactStyle.scss';
import '../addContacts/ListOfContacts.jsx';
import { addIdNewContact } from './../../services/contacts.js';

export default class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: '',
    };
    this.handleItemClick = this.handleItemClick.bind(this);
    this.onAddNewItem = this.onAddNewItem.bind(this);
  }


  onAddNewItem(contact) {
    // console.log(contact);
    // const id = contact._id;
    addIdNewContact(contact).then(response => (response));
  }

  handleItemClick(contact) {
    this.props.onItemClick(contact);
  }


  render() {
    const renderContactLink = (contact, i) => {
      return (
        <div className="selected__user" key={i}>
          <Link to={`/pm/${contact.firstname}`}>
            <Contact
              login={contact.login}
              name={`${contact.firstname} ${contact.lastname}`}
              avatar={contact.avatar}
              message={contact.message}
              time={(contact.time || '').toString()}
              contact={contact}
              key={contact._id}
              onClick={this.handleItemClick}
            />
          </Link>
          {this.props.isAddContactAvailible ? (<button onClick={() => this.onAddNewItem(contact)}>
            + add
          </button>) : null }
        </div>
      );
    };

    if (this.props.contacts.length === 0) {
      return <div>загрузка контактов..</div>;
    }
    return (
      <div className="block">
        <div className="position_add_contact">
          <div className="contacts__list">
            <div className="info__users">
              {this.props.contacts.map(renderContactLink)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ContactList.propTypes = {
  contacts: React.PropTypes.string.isRequired,
  onItemClick: React.PropTypes.func.isRequired,
  isAddContactAvailible: React.PropTypes.string.isRequired,
};
ContactList.defaultProps = {
  contacts: '',
};
