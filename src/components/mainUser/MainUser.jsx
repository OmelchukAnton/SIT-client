import React from 'react';

const MainUser = (props) => {
  const user = JSON.parse(localStorage.getItem('userData') || "{}");
  return (
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
  );
}
export default MainUser;
