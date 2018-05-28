export class Player{
  constructor(player){
    this._id = player._id;
    this.firstName = player.firstName;
    this.lastName = player.lastName;
    this.skills = player.skills;
  }
}

Player.prototype.calculateRating = function(){
  var rating = 0;
  for (let i = 0; i < this.skills.length; i++) {
    rating += this.skills[i].rating;
  }
  if(this.skills.length!=0)
    this.rating = Math.round(rating/this.skills.length);
  else
    this.rating = 0;
}