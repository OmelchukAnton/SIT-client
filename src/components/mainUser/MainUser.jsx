import React from 'react';
import { Link } from 'react-router-dom';
import './MainUserStyle.scss';

const MainUser = () => {
  const user = JSON.parse(localStorage.getItem('userData') || '{}');
  return (
    <div className="content_MainUser">
      <div className="mainUser_info">
        <svg>
          <rect />
        </svg>
        <div className="personal_info">
          <div>
            firstname: {user.firstname}
          </div>
          <div>
            lastname: {user.lastname}
          </div>
          <div>
            email: {user.email}
          </div>
        </div>
      </div>
      <div className="position_newContact_contact">
        <Link to="/find">
          <button className="newContacts_button">
            + new contacts
          </button>
        </Link>
      </div>
    </div>
  );
};
export default MainUser;
