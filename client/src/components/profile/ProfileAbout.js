import React, { Component } from "react";
import PropTypes from "prop-types";
import isEmpty from "../../validation/is-empty";

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;

    const firstName = profile.user.name.trim().split(" ")[0];
    const skills = profile.skills.map((skill, index) => (
      <div key={index}>
        <i className='fa fa-check text-success p-2' />
        {skill.trim()}{" "}
      </div>
    ));

    return (
      <div className='row'>
        <div className='col-md-12'>
          <div className='card card-body bg-light mb-3'>
            {isEmpty(profile.bio) ? null : (
              <div>
                <h3 className='text-primary text-center'>{firstName}'s Bio</h3>
                <p className='lead'>{profile.bio}</p>
                <hr className='m-4' />
              </div>
            )}

            <h3 className='text-primary text-center'>Skill Set</h3>
            <div className='skills row'>{skills}</div>
          </div>
        </div>
      </div>
    );
  }
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
