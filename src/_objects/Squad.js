import {SquadSkill} from './SquadSkill';

export class Squad {
  constructor(name) {
    this.players = [];
    this.skills = [];
    this.name = "Squad "+name;
  }
}

Squad.prototype.addPlayer = function (player) {
  this.players.push(player);
  for (let i = 0; i < player.skills.length; i++) {
    const playerSkill = player.skills[i];
    this.addPlayerSkill(playerSkill);
  }
}

Squad.prototype.addPlayerSkill = function (playerSkill) {
  //check if squad has skill
  var squadHasSkill = false;
  for (let i = 0; i < this.skills.length; i++) {
    var squadSkill = this.skills[i];
    if (squadSkill.type == playerSkill.type) {
      squadHasSkill = true;
      squadSkill.playerCount++;
      squadSkill.rating += playerSkill.rating;
      break;
    }
  }
  if (!squadHasSkill) {
    this.skills.push(new SquadSkill(playerSkill.type, playerSkill.rating))
  }

}