import React, { Component } from 'react';
import { getFilterContacts } from './../../services/contacts.js';
import ContactList from './../contacts/contactList.jsx';
import SearchNewContact from './searchNewContact.jsx';
import './addContacts.scss';

export default class AddContacts extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    getFilterContacts().then((data) => {
      this.setState({
        contacts: data,
        filtered: data,
      });
    });
  }

  handleSearch(value) {
    const { contacts } = this.state;
    const filtered = contacts.filter(
      contact => contact.firstname &&
      contact.firstname.toLowerCase().indexOf(value.toLowerCase()) !== -1,
    );

    this.setState({
      filtered,
    });
  }

  render() {
    return (
      <main className="addContats">
        <div>
          <section>
            <div className="addContats__search">
              <SearchNewContact
                onSearchChange={this.handleSearch}
              />
              <div className="addContats__list">
                <ContactList
                  contacts={this.state.filtered}
                  isAddContactAvailible="true"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    );
  }
}
