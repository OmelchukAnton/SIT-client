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
  }

  componentDidMount() {
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
        <div>
          <section>
            <SearchNewContact
              onSearchChange={this.handleSearch}
            />
            <ContactList
              contacts={this.state.filtered}
              isAddContactAvailible="true"
            />
          </section>
        </div>
      </main>
    );
  }
}
