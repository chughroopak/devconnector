import React, { Component } from "react";
import PropTypes from "prop-types";
import isEmpty from "../../validation/is-empty";

class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div className='row'>
        <div className='col-md-12'>
          <div className='card card-body bg-success text-primary mb-3'>
            <div className='row'>
              <div className='col-4 col-md-3 m-auto'>
                <img
                  className='rounded-circle'
                  src={profile.user.avatar}
                  alt=''
                />
              </div>
            </div>
            <div className='text-center'>
              <h1 className='display-4'>{profile.user.name}</h1>
              <p className='lead font-weight-normal'>
                {profile.status}{" "}
                {isEmpty(profile.company) ? null : (
                  <span>at {profile.company}</span>
                )}
              </p>
              <p>{profile.location}</p>
              <div>
                {isEmpty(profile.website) ? null : (
                  <a
                    href={profile.website}
                    rel='noopener noreferrer'
                    target='_blank'
                    className='p-2'>
                    <i className='fas fa-globe fa-2x'></i>
                  </a>
                )}
                {isEmpty(profile.social && profile.social.twitter) ? null : (
                  <a
                    href={profile.social.twitter}
                    rel='noopener noreferrer'
                    target='_blank'
                    className='p-2'>
                    <i className='fab fa-twitter fa-2x'></i>
                  </a>
                )}
                {isEmpty(profile.social && profile.social.facebook) ? null : (
                  <a
                    href={profile.social.facebook}
                    rel='noopener noreferrer'
                    target='_blank'
                    className='p-2'>
                    <i className='fab fa-facebook fa-2x'></i>
                  </a>
                )}
                {isEmpty(profile.social && profile.social.linkedin) ? null : (
                  <a
                    href={profile.social.linkedin}
                    rel='noopener noreferrer'
                    target='_blank'
                    className='p-2'>
                    <i className='fab fa-linkedin fa-2x'></i>
                  </a>
                )}
                {isEmpty(profile.social && profile.social.youtube) ? null : (
                  <a
                    href={profile.social.youtube}
                    rel='noopener noreferrer'
                    target='_blank'
                    className='p-2'>
                    <i className='fab fa-youtube fa-2x'></i>
                  </a>
                )}
                {isEmpty(profile.social && profile.social.instagram) ? null : (
                  <a
                    href={profile.social.instagram}
                    rel='noopener noreferrer'
                    target='_blank'
                    className='p-2'>
                    <i className='fab fa-instagram fa-2x'></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProfileHeader.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileHeader;
