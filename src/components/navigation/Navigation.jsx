import React, { Component } from 'react';
import './Navigation.scss';

export default class Navigation extends Component {
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
      <div className="Navigation__over_contacts">
        <div className="nav_block">
          <div className="general_info">
            <div className="name_app">
              <div className="Messenger"> Stay in touch! </div>
            </div>
            <div className="action_nav">
              <input
                className="search_users"
                type="text"
                placeholder="Search for users"
                value={this.state.search}
                onChange={this.updateSearch}
              />
              <div className="dropdown_list"> ... </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Navigation.propTypes = {
  onSearchChange: React.PropTypes.func.isRequired,
};
