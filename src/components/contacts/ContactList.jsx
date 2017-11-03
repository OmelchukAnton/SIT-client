import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { addIdNewContact } from './../../services/contacts.js';
import Contact from './Contact.jsx';
import '../addContacts/ListOfContacts.jsx';
import './ContactStyle.scss';

function onAddNewItem(contact) {
  addIdNewContact(contact);
}

export default class ContactList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: '',
    };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(contact) {
    this.props.onItemClick(contact);
    // .then(id => {
    //   this.props.router.push('')
    // });
  }

  render() {
    const renderContactLink = (contact, i) =>
      <div className="selectUser" key={i}>
        <Link to={`/pm/${contact.chatId}`}>
          <Contact
            name={`${contact.firstname} ${contact.lastname}`}
            id={contact._id}
            onClick={this.handleItemClick}
          />
          {this.props.isAddContactAvailible ?
            (<button onClick={() => onAddNewItem(contact)}>
              + add
            </button>) : null }
        </Link>
      </div>;

    if (this.props.contacts.length === 0) {
      return <div>загрузка контактов..</div>;
    }

    return (
      <div className="contactsList">
        {this.props.contacts.map(renderContactLink)}
      </div>
    );
  }
}

ContactList.propTypes = {
  contacts: React.PropTypes.array.isRequired,
  onItemClick: React.PropTypes.func,
  isAddContactAvailible: React.PropTypes.string,
};

ContactList.defaultProps = {
  contacts: [],
  onItemClick: () => {},
  isAddContactAvailible: '',
};
