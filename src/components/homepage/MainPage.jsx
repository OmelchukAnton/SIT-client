import React from 'react';
import { Link } from 'react-router-dom';
import './StartPage.scss';

const MainPage = () => (
  <main className="homepage__body">
    <article className="greeting"> Welcome! </article>
    <div className="greeting__info"> Glad you are here... </div>
    <section className="about_app">
      <div className="left_side">
        <img src="./avatars/lists.jpg" alt="example-listOfContacts" className="first_picture" />
        <img src="./avatars/chat.jpg" alt="example-chat" className="second_picture" />
      </div>
      <div className="rigth_side">
        <h1> about SPA... </h1>
        <Link to="/reg">
          <button className="button__goto_registration">Log in</button>
        </Link>
      </div>
    </section>
  </main>
);
export default MainPage;
