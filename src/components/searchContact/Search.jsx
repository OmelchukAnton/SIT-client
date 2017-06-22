import React, { Component } from 'react';

import './searchAndAddContact.scss';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      contacts: '',
    };

    // this.handleAddNewChange = this.handleAddNewChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }

  // handleSubmit() {
  //   this.props.onAddChange(this.state.contacts);
  // }
  //
  // handleAddNewChange(event) {
  //   this.setState({
  //     contacts: event.target.value,
  //   });
  // }

  updateSearch({ target }) {
    this.setState({
      search: target.value,
    });

    this.props.onSearchChange(target.value);
  }

  render() {
    return (
      <div className="searchAndAddContact">
        <div>
          <div>
            <input
              className="searchNewAccount"
              type="text"
              placeholder="login"
              value={this.state.search}
              onChange={this.updateSearch}
            />
          </div>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  onSearchChange: React.PropTypes.func.isRequired,

};
Search.defaultProps = {
};
