import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Contact from './Contact.jsx';
import './ContactStyle.scss';
import '../addContacts/ListOfContacts.jsx';
import { addIdNewContact } from './../../services/contacts.js';

export default class ContactList extends Component {

  static onAddNewItem(contact) {
    addIdNewContact(contact).then(response => response);
  }

  constructor(props) {
    super(props);
    this.state = {
      contacts: '',
    };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(contact) {
    this.props.onItemClick(contact);
  }

  render() {
    const renderContactLink = (contact, i) =>
      <div className="selected__user" key={i}>
        <Link to={`/pm/${contact.firstname}`}>
          <Contact
            name={`${contact.firstname} ${contact.lastname}`}
            avatar={contact.avatar}
            message={contact.message}
            time={(contact.time || '').toString()}
            // contact={contact}
            // key={contact._id}
            onClick={this.handleItemClick}
          />
        </Link>
        {this.props.isAddContactAvailible ?
          (<button onClick={() => ContactList.onAddNewItem(contact)}>
            + add
          </button>) : null }
      </div>;

    if (this.props.contacts.length === 0) {
      return <div>загрузка контактов..</div>;
    }
    return (
      <div className="contacts__list">
        {this.props.contacts.map(renderContactLink)}
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

// // console.log(contact._id, contact.firstname, contact.lastname)
// contact = {
//   _id: contact._id,
//   firstname: contact.firstname,
//   lastname: contact.lastname,
// };
// // console.log(contact)
