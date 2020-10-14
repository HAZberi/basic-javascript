var avgTeamJohn, avgTeamMike, avgTeamMary;

var johnScore1 = 89,
  johnScore2 = 120,
  johnScore3 = 103,
  mikeScore1 = 116,
  mikeScore2 = 123,
  mikeScore3 = 94,
  maryScore1 = 97,
  maryScore2 = 134,
  maryScore3 = 105;

avgTeamJohn = (johnScore1 + johnScore2 + johnScore3) / 3;
console.log("Team John Average Score = " + avgTeamJohn);
avgTeamMike = (mikeScore1 + mikeScore2 + mikeScore3) / 3;
console.log("Team Mike Average Score = " + avgTeamMike);
avgTeamMary = (maryScore1 + maryScore2 + maryScore3) / 3;
console.log("Team Mary Average Score = " + avgTeamMary);

if (avgTeamJohn > avgTeamMike && avgTeamJohn > avgTeamMary) {
  console.log(
    "Team John is the winner and their average score is " + avgTeamJohn
  );
} else if (avgTeamMike > avgTeamJohn && avgTeamMike > avgTeamMary) {
  console.log(
    "Team Mike is the winner and their average score is " + avgTeamMary
  );
} else if (avgTeamMary > avgTeamJohn && avgTeamMary > avgTeamMike) {
  console.log(
    "Team Mary is the winner and their average score is " + avgTeamMary
  );
} else {
  if (avgTeamJohn === avgTeamMike) {
    console.log("We have a draw between Team John and Team Mike");
  } else if (avgTeamJohn === avgTeamMary) {
    console.log("We have a draw between Team John and Team Mary");
  } else {
    console.log("We have a draw between Team Mary and Team Mike");
  }
}
