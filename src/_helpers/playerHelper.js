import { Player } from '../_objects';

export const playerHelper = {
  convertToPlayerClass
};

//Converting to defined player class for better usability of javascript object
//This is a performance on load of the data to improve later operations
function convertToPlayerClass(players) {
  var newPlayers = [];
  for (let i = 0; i < players.length; i++) {
    newPlayers.push(new Player(players[i]));
  }
  return newPlayers;
}
