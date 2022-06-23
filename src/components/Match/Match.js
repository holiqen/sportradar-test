// Return number from 0 to 10
export const getRandomScore = () => {
  return Math.floor(Math.random() * 11);
};

export const getWinner = (homeTeamScore, awayTeamScore) => {
  if (homeTeamScore > awayTeamScore) {
    return "homeTeam";
  } else if (homeTeamScore < awayTeamScore) {
    return "awayTeam";
  } else {
    return "draw";
  }
};
