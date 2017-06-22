import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Contact from './Contact.jsx';

import Search from './../searchContact/Search.jsx';

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
    if (this.props.contacts.length === 0) {
      return <div>загрузка контактов..</div>;
    }
    return (
      <div className="block">
        <div>
          <div className="contacts__list">
            <div className="info__users">
              {this.props.contacts.map( // TODO: вынести в отдельный метод
                (contact, i) =>
                  <div className="selected__user" key={i}>
                    <Link to={`/pm/${contact.firstname}`}>
                      <Contact
                        login={contact.login}
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
          </div>
        </div>
      </div>
    );
  }
}

ContactList.propTypes = {
  contacts: React.PropTypes.array,
  onItemClick: React.PropTypes.func.isRequired,
};
ContactList.defaultProps = {
  contacts: [],
};
