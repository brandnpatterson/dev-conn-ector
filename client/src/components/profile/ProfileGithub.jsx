import React from 'react';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';

const propTypes = {
  username: string.isRequired
};

class ProfileGithub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: '26bbbf5d8989d66c8dc8',
      clientSecret: 'f02c7720e2512ed6f028c88039059fa099fc81ab',
      count: 5,
      repos: [],
      sort: 'created: asc'
    };
  }

  componentDidMount() {
    const { username } = this.props;
    const { count, clientId, clientSecret, sort } = this.state;

    fetch(
      `https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`,
      {
        headers: {
          accept: 'application/json',
          'accept-language': 'en_US',
          'content-type': 'application/x-www-form-urlencoded'
        }
      }
    )
      .then(res => res.json())
      .then(data => {
        if (this.refs.myRef) {
          this.setState({ repos: data });
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    const { repos } = this.state;

    const repoItems = repos.map(repo => {
      return (
        <div className="card card-body md-2" key={repo.id}>
          <div className="row">
            <div className="col-md-6">
              <h4>
                <Link to={repo.html_url} className="text-info" target="_blank">
                  {repo.name}
                </Link>
              </h4>
              <p>{repo.description}</p>
            </div>
            <div className="col-md-6">
              <span className="badge badge-info mr-1">
                Stars: {repo.stargazers_count}
              </span>
              <span className="badge badge-secondary mr-1">
                Watchers: {repo.watchers_count}
              </span>
              <span className="badge badge-success">
                Forks: {repo.forks_count}
              </span>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div ref="myRef">
        <hr />
        <h3 className="mb-4">Latest Github Repos</h3>
        {repoItems}
      </div>
    );
  }
}

ProfileGithub.propTypes = propTypes;

export default ProfileGithub;
