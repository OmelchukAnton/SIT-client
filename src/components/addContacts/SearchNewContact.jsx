import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
      <div className="header_find_contacts">
        <Link to="/pm">
          <button className="return_to_pm">return to my page</button>
        </Link>
        <input
          className="search_users"
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
