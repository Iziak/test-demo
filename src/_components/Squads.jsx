import _ from 'lodash';
import React from 'react';
import { Player } from './Player';
import {SVGs} from './SVGs';

export class Squads extends React.Component {
  renderSquadSkills(skills) {
    return _.map(skills, skill => {
      return (
        <div key={skill.type} className="squad-skill col-md-4">
          <div><span>{SVGs['render'+skill.type]()} Average {skill.type}: <span></span> {Math.round(skill.rating / skill.playerCount)}</span></div>
        </div>
      )
    })
  }
  renderSquadPlayers(players) {
    return _.map(players, player => {
      return (
        <div key={player._id} className="player-cont">
          <Player player={player} />
        </div>
      )
    })
  }
  render() {
    const { squads } = this.props;
    if (squads && squads.length > 0)
      return (
        <div>
          {
            _.map(squads, squad => {
              return (
                <div key={squad.name} className="squad">
                  <h3>{squad.name}</h3>
                  <div className="row">
                    {this.renderSquadSkills(squad.skills)}
                  </div>
                  <div>
                    {this.renderSquadPlayers(squad.players)}
                  </div>
                </div>
              )
            })
          }
        </div>
      )
    else
      return <div>No Squads to display.<br /><br /></div>

  }
} 