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
      <section className="Navigation_over_contacts">
        <div className="nav__block">
          <div className="general__info">
            <div className="name__app">
              Stay in touch!
            </div>
            <div className="action__nav">
              <input
                className="nav_search_users"
                type="text"
                placeholder="Search for users"
                value={this.state.search}
                onChange={this.updateSearch}
              />
              <div className="nav__dropdown"> ... </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
Navigation.propTypes = {
  onSearchChange: React.PropTypes.func.isRequired,
};
