import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
// import { myUser } from '../../services/user.js';
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
          <h2 className="homepage__head_greating">Welcome! </h2>
          <p className="homepage__head_greatingInfo"> Glad you are here... </p>
        </article>
        <section className="homepage__content">
          <div className="homepage__content_left">
            <img src="./images/lists.jpg" alt="example-listOfContacts" className="picture__one" />
            <img src="./images/chat.jpg" alt="example-chat" className="picture__two" />
          </div>
          <div className="homepage__content_center">
            <h1> Stay in touch! </h1>
            <p> about messenger... </p>
          </div>
          <div className="homepage__content_regForm">
            <Link to="/reg">
              <button className="homepage__content_regForm_btn">R e g i s t r a t i o n</button>
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
