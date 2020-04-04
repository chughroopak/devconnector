import React, { Component } from "react";
import PropTypes from "prop-types";

class ProfileGithub extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clientId: "babf9b2f9404768f205e",
      clientSecret: "91a4d1485d3b2111a4144eca30bd9ad3e62af920",
      count: 5,
      sort: "created: asc",
      repos: []
    };
  }

  componentDidMount() {
    const { username } = this.props;
    const { count, sort, clientId, clientSecret } = this.state;
    fetch(
      `https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ repos: data });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { repos } = this.state;

    const repoItems = repos.map(repo => (
      <div key={repo.id} className='card card-body mb-2'>
        <div className='row'>
          <div className='col-md-8'>
            <h4>
              <a
                href={repo.html_url}
                className='text-success'
                rel='noopener noreferrer'
                target='_blank'>
                {repo.name}
              </a>
            </h4>
            <p>{repo.description}</p>
          </div>
          <div className='col-md-4'>
            <span className='badge-info badge mr-1'>
              Stars:{repo.stargazers_count}
            </span>
            <span className='badge-danger badge mr-1'>
              Watchers:{repo.watchers_count}
            </span>
            <span className='badge-success badge'>
              Forks:{repo.forks_count}
            </span>
          </div>
        </div>
      </div>
    ));

    return (
      <div>
        <hr />
        <h3 className='mb-4'>Latest Github Repos</h3>
        {repoItems}
      </div>
    );
  }
}

ProfileGithub.propTypes = {
  username: PropTypes.string.isRequired
};

export default ProfileGithub;
