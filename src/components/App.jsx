import React, { Component } from 'react';
import ContactList from './contacts/contactList.jsx';
import Navigation from './navigation/navigation.jsx';
import Owner from './owner/owner.jsx';
import ChatWindow from './chat/chatWindow.jsx';
import { getUser } from '../services/user.js';
import { getOwnContacts } from '../services/contacts.js';
import './app.scss';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleSearch = this.handleSearch.bind(this);
    this.onItemClick = this.onItemClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
  }

  componentWillMount() {
    getUser();
  }

  componentDidMount() {
    getOwnContacts().then((data) => {
      this.setState({
        contacts: data,
        filtered: data,
      });
    });
  }

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

  handleBackClick() {
    this.setState({
      contactItem: null,
    });
  }

  render() {
    return (
      <main>
        <div className="contentSection">
          <section>
            <Navigation
              onSearchChange={this.handleSearch}
            />
            <Owner />
            <div className="tada">
              <ContactList
                contacts={this.state.filtered}
                onItemClick={this.onItemClick}
              />
            </div>
          </section>
          <section>
            <ChatWindow
              contact={this.state.contactItem}
              onClick={this.handleBackClick}
            />
            {this.props.children}
          </section>
        </div>
      </main>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired,
};
