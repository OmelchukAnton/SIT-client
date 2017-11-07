import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { addIdNewContact } from './../../services/contacts.js';
import Contact from './contacts.jsx';
import '../addContacts/addContacts.jsx';
import './contacts.scss';

class ContactList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: '',
    };

    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleAddingNewContact = this.handleAddingNewContact.bind(this);
  }

  handleAddingNewContact(contact) {
    this.setState({
      isLoading: true,
    });

    addIdNewContact(contact).then((chatId) => {
      this.setState({
        isLoading: false,
      });

      this.props.history.push(`/pm/${chatId}`);
    });
  }

  handleItemClick(contact) {
    this.props.onItemClick(contact);
  }

  render() {
    const renderContactLink = (contact, i) => (
      <div className="selectUser" key={i}>
        <Link to={`/pm/${contact.chatId}`}>
          <Contact
            name={`${contact.firstname} ${contact.lastname}`}
            id={contact._id}
            onClick={this.handleItemClick}
          />
        </Link>
        {
          this.props.isAddContactAvailible ?
            (
              <button onClick={() => this.handleAddingNewContact(contact)}>
                + add
              </button>
            ) : null
        }
      </div>
    );

    if (this.props.contacts.length === 0) {
      return <div> you do not have contacts. </div>;
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
  history: React.PropTypes.object.isRequired,
};

ContactList.defaultProps = {
  contacts: [],
  onItemClick: () => {},
  isAddContactAvailible: '',
};

export default withRouter(ContactList);
