import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navigation.scss';

function onExitClick() {
  JSON.parse(localStorage.removeItem('userData') || '{}');
}

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
      <section className="navMainUser">
        <div className="navMainUser__block">
          <div className="navMainUser__block_general">
            <div className="navMainUser__block_general_nameApp">
              Stay in touch!
            </div>
            <div className="navMainUser__block_general_action">
              <input
                className="navMainUser__block_general_action_search"
                type="text"
                placeholder="Search for users"
                value={this.state.search}
                onChange={this.updateSearch}
              />
              <Link to="/">
                <button className="navMainUser__block_general_action_exit" onClick={onExitClick}>
                   exit
                 </button>
              </Link>
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
