const team = {
  // Players on the team
  _players: [
    {
      firstName: "Robert",
      lastName: "Robertson",
      age: 36,
    },
    {
      firstName: "John",
      lastName: "Walker",
      age: 34,
    },
    {
      firstName: "Steven",
      lastName: "Williams",
      age: 35,
    },
  ],
  // Played games
  _games: [
    {
      opponent: "Germany",
      teamPoints: 20,
      opponentPoints: 15,
    },
    {
      opponent: "USA",
      teamPoints: 24,
      opponentPoints: 10,
    },
  ],
  // Get all players
  get players() {
    return this._players;
  },
  // get all games
  get games() {
    return this._games;
  },
  // Add player
  addPlayer(firstName, lastName, age) {
    this._players.push({
      firstName,
      lastName,
      age,
    });
  },
  // Add games
  addGame(opponent, teamPoints, opponentPoints) {
    this._games.push({
      opponent,
      teamPoints,
      opponentPoints,
    });
  },
};

console.log(team.players);
team.addPlayer("Bugs", "Bunny", 76);
console.log(team.players);

console.log(team.games);
team.addGame("Poland", 40, 20);
console.log(team.games);
