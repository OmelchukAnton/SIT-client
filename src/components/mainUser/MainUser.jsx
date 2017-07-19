import React from 'react';
import { Link } from 'react-router-dom';
import './MainUserStyle.scss';

const MainUser = () => {
  const user = JSON.parse(localStorage.getItem('userData') || '{}');
  return (
    <div className="content__MainUser">
      <div className="mainUser__info">
        <svg className="main_ava_svg">
          <rect className="main_ava_rect" />
        </svg>
        <section className="personal__info">
          <div>
            {user.firstname} {user.lastname}
          </div>
          <div className="main_info_status">
            <input placeholder="change status" />
          </div>
          <div>
            email: {user.email}
          </div>
        </section>
      </div>
      <div className="nav_under_mainInfo">
        <div className="position_my_contacts">
          My contacts:
        </div>
        <div className="position_newContact_contact">
          <Link to="/find">
            <button className="add_button_style">
              + new contact
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default MainUser;
