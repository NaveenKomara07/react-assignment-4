import './index.css'

import {Component} from 'react'

class MatchCard extends Component {
  render() {
    const {matchesData} = this.props
    const {result, competingTeam, competingTeamLogo, matchStatus} = matchesData
    return (
      <li className={`matches-card ${matchStatus}`}>
        <img
          src={competingTeamLogo}
          className="match-card-logo"
          alt={`competing team ${competingTeam}`}
        />
        <p className="match-card-name">{competingTeam}</p>
        <p className="match-card-result">{result}</p>
        <p className="match-card-status">{matchStatus}</p>
      </li>
    )
  }
}

export default MatchCard
