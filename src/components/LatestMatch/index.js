import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatch} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      manOfTheMatch,
      result,
      secondInnings,
      umpires,
      venue,
    } = latestMatch

    return (
      <div className="latest-match-card-container">
        <h1 className="latest-match-heading">Latest Match</h1>
        <div className="latest-match-card">
          <div className="latest-match-logo-container">
            <div className="latest-match-details-main">
              <p className="team-name">{competingTeam}</p>
              <p className="latest-match-date">{date}</p>
              <p className="latest-match-venue">{venue}</p>
              <p className="latest-match-result">{result}</p>
            </div>
            <img
              src={competingTeamLogo}
              className="team-logo"
              alt={`latest match ${competingTeam}`}
            />
          </div>
          <div className="latest-match-details-info">
            <div className="match-info-team">
              <p className="first">First Innings</p>
              <p className="value">{firstInnings}</p>
            </div>
            <div className="match-info-team">
              <p className="first">Second Innings</p>
              <p className="value">{secondInnings}</p>
            </div>
            <div className="match-info-team">
              <p className="first">man of the Match</p>
              <p className="value">{manOfTheMatch}</p>
            </div>
            <div className="match-info-team">
              <p className="first">Umpires</p>
              <p className="value">{umpires}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LatestMatch
