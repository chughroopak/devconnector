import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import ProfileAbout from "./ProfileAbout";
import ProfileCreds from "./ProfileCreds";
import ProfileGithub from "./ProfileGithub";
import ProfileHeader from "./ProfileHeader";
import Spinner from "../common/Spinner";

import { getProfileByHandle } from "../../actions/profileActions";

class Profile extends Component {
  state = { mounted: false };
  componentDidMount() {
    if (this.props.match.params.handle && !this.props.profile.profile) {
      this.props.getProfileByHandle(this.props.match.params.handle);
      this.setState({ mounted: true });
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.profile.loading &&
      nextProps.errors.noprofile &&
      prevState.mounted
    ) {
      nextProps.history.push("/not-found");
    }
    return null;
  }

  render() {
    const { profile, loading } = this.props.profile;

    let profileContent;
    if (profile === null || loading) {
      profileContent = <Spinner />;
    } else {
      profileContent = (
        <div>
          <div className='row'>
            <div className='col-md-6'>
              <Link to='/profiles' className='btn btn-light mb-3 float-left'>
                Back To Profiles
              </Link>
            </div>
            <div className='col-md-6' />
            <div className='col-md-12'>
              <ProfileHeader profile={profile} />
              <ProfileAbout profile={profile} />
              <ProfileCreds
                education={profile.education}
                experience={profile.experience}
              />
              {profile.githubusername ? (
                <ProfileGithub username={profile.githubusername} />
              ) : null}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className='profile  mt-5 mb-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>{profileContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { getProfileByHandle })(Profile);
