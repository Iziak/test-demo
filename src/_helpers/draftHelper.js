export const draftHelper = {
  snakeDraft
}

function snakeDraft(squads,players,squadCount){
  var forward = true;
  var currentSquad = 0;
  while (players.length > 0) {
      //remove the first player (highest rating) from the list and push it to the squad
      squads[currentSquad].addPlayer(players.shift());

      //if the current squad is the last or the first, switch direction and place one more on the team (the snake in snake draft)
      if (currentSquad == squadCount - 1&&forward){
          forward = false;
          continue;
      }
      else if (currentSquad == 0&&!forward){
          forward = true;
          continue;
      }
      //based on direction, increment or decrement
      forward ? currentSquad++ : currentSquad--;   
  }
}