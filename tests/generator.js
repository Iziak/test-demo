import { Player, Squad } from '../src/_objects';

export const generator = {
  generatePlayers,
  generatePlayer,
  generateSkills,
  generateSkill,
  generateSquads
}

function generateSkill(i) {
  return { type: "skill_" + i, rating: Math.random(80) + 20 }
}

function generateSkills(skillCount) {
  var skills = [];
  for (let i = 0; i < skillCount; i++) {
    skills.push(generateSkill(i));
  }
  return skills;
}

function generatePlayer(i, skillCount) {
  return new Player({
    _id: "id_" + i,
    firstName: "firstName_" + i,
    lastName: "lastName_" + i,
    skills: generateSkills(skillCount)
  })
}

function generatePlayers(count, skillCount) {
  var players = []
  for (let i = 0; i < count; i++) {
    players.push(generatePlayer(i, skillCount));
  }
  return players;
}

function generateSquads(count) {
  var squads = [];
  for (let i = 0; i < count; i++) {
    squads.push(new Squad(i + 1))
  }
  return squads;
}