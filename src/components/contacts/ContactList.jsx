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
    this.handleItemClick = this.handleItemClick.bind(this);
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
              key={contact.id}
              onClick={this.handleItemClick}
            />
          </Link>
          {this.props.isAddContactAvailible ? (<button>+ add</button>) : null }
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
  contacts: React.PropTypes.string,
  onItemClick: React.PropTypes.func.isRequired,
  isAddContactAvailible: React.PropTypes.func.isRequired,
};
ContactList.defaultProps = {
  contacts: '',
};
