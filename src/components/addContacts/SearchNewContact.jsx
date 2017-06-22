import React, { Component } from 'react';

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
      <div className="action_nav">
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
