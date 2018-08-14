import React from 'react'
import { getGithub } from '../../utils/api'

class ProfileGithub extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      repos: [],
    }
  }
  async componentDidMount() {
    const { username } = this.props
    const data = await getGithub(username)
    if (this.refs.myRef) {
      this.setState({ repos: data })
    }
  }

  render() {
    const { repos } = this.state
    const repoItems = repos.map(repo => (
      <div
        className='repo'
        key={repo.id}>
        <div className="title">
          <a href={repo.html_url} target='_blank'>
            <h4>{repo.name}</h4>
          </a>
          <p>{repo.description}</p>
        </div>
        <div className="count">
          <p className='stars'>Stars: {repo.stargazers_count}</p>
          <p className='watch'>Watchers: {repo.watchers_count}</p>
          <p className='fork'>Forks: {repo.forks_count}</p>
        </div>
      </div>
    ))

    return(
      <div ref='myRef' className='profilegithub'>
        <div className="container">
          <div className="repositories">
            <h1>GitHub Last Repositories</h1>
            {repoItems}
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileGithub
