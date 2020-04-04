import React from "react";
import { Link } from "react-router-dom";

const ProfileActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn btn-light mb-1'>
        <i className='fas fa-user-circle text-primary mr-1'></i> Edit Profile
        Info
      </Link>{" "}
      <Link to='/add-experience' className='btn btn-light mb-1'>
        <i className='fab fa-black-tie text-primary mr-1'></i> Add Experience
      </Link>{" "}
      <Link to='/add-education' className='btn btn-light mb-1'>
        <i className='fas fa-graduation-cap text-primary mr-1'></i> Add
        Education
      </Link>
    </div>
  );
};

export default ProfileActions;
