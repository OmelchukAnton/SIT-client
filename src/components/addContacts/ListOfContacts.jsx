import React, { Component } from 'react';
import ContactList from './../contacts/ContactList.jsx';
import SearchNewContact from './SearchNewContact.jsx';
import { getContacts } from './../../services/contacts.js';

export default class ListOfContacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.showAllContacts = this.showAllContacts.bind(this);
  }

  showAllContacts() {
    getContacts().then((data) => {
      this.setState({
        contacts: data,
        filtered: data,
      });
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
        <SearchNewContact
          onSearchChange={this.handleSearch}
        />
        <div>
          <button onClick={this.showAllContacts}>
            + other contacts
          </button>
          <section>
            <ContactList
              contacts={this.state.filtered}
            />
          </section>
        </div>
      </main>
    );
  }
}
