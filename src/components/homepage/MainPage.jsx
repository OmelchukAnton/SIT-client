import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Login from './../login/Login.jsx';
import './StartPage.scss';

export class HomePage extends Component {

  componentWillMount() {
    const userAuth = JSON.parse(localStorage.getItem('userData') || '{}');
    if (Object.keys(userAuth).length) {
      this.props.history.push('/pm');
    }
  }
  render() {
    return (
      <main className="homepage">
        <article className="homepage__head">
          <h2 className="homepage__greeting">Welcome! </h2>
          <p className="homepage_greeting_info"> Glad you are here... </p>
        </article>
        <section className="homepage_content">
          <div className="left_side_content">
            <img src="./avatars/lists.jpg" alt="example-listOfContacts" className="picture__one" />
            <img src="./avatars/chat.jpg" alt="example-chat" className="picture__two" />
          </div>
          <div className="center">
            <h1> Stay in touch! </h1>
            <p> about messenger... </p>
          </div>
          <div className="form__reg">
            <Link to="/reg">
              <button className="button_goto_registration">R e g i s t r a t i o n</button>
            </Link>
            <Login />
          </div>
        </section>
      </main>
    );
  }
}
HomePage.propTypes = {
  history: React.PropTypes.func.isRequired,
};
export default withRouter(HomePage);
