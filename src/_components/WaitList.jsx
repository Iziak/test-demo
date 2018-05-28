import _ from 'lodash';
import React from 'react';
import { Player } from './Player';

export class WaitList extends React.Component {
  renderPlayers() {
    const { players } = this.props;
    if (players.length > 0)
      return _.map(players, player => {
        return (
          <div key={player._id} className="player-cont">
            <Player player={player} />
          </div>
        )
      });
    else
      return <div>There are no players on the wailist.</div>
  }
  render() {
    if (this.props.players)
      return (
        <div>
          {this.renderPlayers()}
        </div>
      );
    else
      return (
        <div>Loading...</div>
      )
  }
} 