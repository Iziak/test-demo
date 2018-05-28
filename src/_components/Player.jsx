import _ from 'lodash';
import React from 'react';

export class Player extends React.Component {
  render() {
    const { player } = this.props;
    return (
      <div>
        <h4>{player.firstName + " " + player.lastName}</h4>
        <div className="player-skills-cont">
          {
            _.map(player.skills, skill => {
              return (
                <div key={skill.type}>
                  {skill.type}: {skill.rating}
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
} 