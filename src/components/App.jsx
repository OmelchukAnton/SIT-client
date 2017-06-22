import React, { Component } from 'react';
import ContactList from './contacts/ContactList.jsx';
import Navigation from './navigation/Navigation.jsx';
import ChatWindow from './chatBody/ChatWindow.jsx';
import { Link } from 'react-router-dom';
import { getOwnContacts } from '../services/contacts.js';
import ListOfContacts from './addContacts/ListOfContacts.jsx';

import './App.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // filtered: [],
    };
    this.handleSearch = this.handleSearch.bind(this);
    // this.onAddNewItem = this.onAddNewItem.bind(this);
    this.onItemClick = this.onItemClick.bind(this);
  }

  componentDidMount() {
    getOwnContacts().then((data) => {
      this.setState({
        contacts: data,
        filtered: data,
      });
    });
  }

  // onAddNewItem(name) {
  //   getContacts().then((prevState) => {
  //     this.setState({
  //       filtered: [...prevState.filtered, { name }],
  //       contacts: [...prevState.contacts, { name }],
  //     });
  //   });
  // }

  onItemClick(contact) {
    this.setState({
      contactItem: contact,
    });
  }

  handleSearch(value) {
    const { contacts } = this.state;
    const filtered = contacts.filter(
    contact => contact.firstname.toLowerCase().indexOf(value.toLowerCase()) !== -1,
    );

    this.setState({
      filtered,
    });
  }

  render() {
    return (
      <main>
        <div className="location__chat_and_contacts">
          <section>
            <Navigation
              onSearchChange={this.handleSearch}
            />
            <div className="info_contacts">
            </div>
            <ContactList
              contacts={this.state.filtered}
              // onAddChange={this.onAddNewItem}
              onItemClick={this.onItemClick}
            />
          </section>
          <section>
            <ChatWindow
              contact={this.state.contactItem}
            />
            {this.props.children}
          </section>
        </div>
        <ListOfContacts />
      </main>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired,
};
