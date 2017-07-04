import React, { Component } from 'react';
import ContactList from './../contacts/ContactList.jsx';
import SearchNewContact from './SearchNewContact.jsx';
import { Link } from 'react-router-dom';
import { getContacts } from './../../services/contacts.js';
import './find.scss';


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
      <main className="addContats_page">
        <div>
          <section>
            <Link to="/pm">
              <button className="return_mypage">return to my page</button>
            </Link>
            <div className="contacts_list">
              <SearchNewContact
                onSearchChange={this.handleSearch}
              />
              <ContactList
                contacts={this.state.filtered}
                isAddContactAvailible="true"
              />
            </div>
          </section>
        </div>
      </main>
    );
  }
}
