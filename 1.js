const prompt=require('prompt-sync')();
class Player {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
}

class Team {
  constructor() {
    this.players = [];
  }

  addPlayer(player) {
    this.players.push(player);
  }

  getAverageScore() {
    if (this.players.length === 0) {
      return 0;
    }

    let sum = 0;
    for (let player of this.players) {
      sum += player.score;
    }
    return sum / this.players.length;
  }

  getMinimumScore() {
    if (this.players.length === 0) {
      return 0;
    }

    let minScore = this.players[0].score;
    for (let i = 1; i < this.players.length; i++) {
      if (this.players[i].score < minScore) {
        minScore = this.players[i].score;
      }
    }
    return minScore;
  }

  getMaximumScore() {
    if (this.players.length === 0) {
      return 0;
    }

    let maxScore = this.players[0].score;
    for (let i = 1; i < this.players.length; i++) {
      if (this.players[i].score > maxScore) {
        maxScore = this.players[i].score;
      }
    }
    return maxScore;
  }
}

function main() {
  const team = new Team();

  // Taking user input
  const numPlayers = parseInt(prompt("Enter the number of players:"));

  for (let i = 1; i <= numPlayers; i++) {
    const name = prompt(`Enter the name of player ${i}:`);
    const score = parseInt(prompt(`Enter the score of player ${i}:`));
    const player = new Player(name, score);
    team.addPlayer(player);
  }

  // Calculating and displaying results
  console.log("Team Statistics");
  console.log("--------------");
  console.log(`Average Score: ${team.getAverageScore()}`);
  console.log(`Minimum Score: ${team.getMinimumScore()}`);
  console.log(`Maximum Score: ${team.getMaximumScore()}`);
}

// Calling the main function
main();
