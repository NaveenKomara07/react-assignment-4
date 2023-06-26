import './index.css'

import {Link} from 'react-router-dom'

import {Component} from 'react'

class TeamCard extends Component {
  render() {
    const {teamData} = this.props
    const {imageUrl, id, name} = teamData
    return (
      <Link to={`/team-matches/${id}`} className="link-item">
        <li className="team-card">
          <img src={imageUrl} className="team-card-design" alt={`${name}`} />
          <p className="team-para-design">{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
