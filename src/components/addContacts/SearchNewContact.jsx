import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './addContacts.scss';

export default class SearchNewContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch({ target }) {
    this.setState({
      search: target.value,
    });
    this.props.onSearchChange(target.value);
  }

  render() {
    return (
      <div className="searchContacts">
        <div className="searchContacts__appName">
          Stay in touch!
          <p>add new contacts</p>
        </div>
        <Link to="/pm">
          <button className="searchContacts__returnBack">return to my page</button>
        </Link>
        <input
          className="searchContacts__inputSearch"
          type="text"
          placeholder="Search for users"
          value={this.state.search}
          onChange={this.updateSearch}
        />
      </div>
    );
  }
}

SearchNewContact.propTypes = {
  onSearchChange: React.PropTypes.func.isRequired,
};
