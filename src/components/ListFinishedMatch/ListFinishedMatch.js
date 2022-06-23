// TODO - sort finished matches by score and last added

export const getSortedFinishedMatches = (finishedMatches) => {
  return (
    finishedMatches &&
    finishedMatches.sort((a, b) => {
      if (a.homeTeamScore + a.awayTeamScore > b.homeTeamScore + b.awayTeamScore) {
        return -1;
      }
      if (a.homeTeamScore + a.awayTeamScore < b.homeTeamScore + b.awayTeamScore) {
        return 1;
      }
      return -1;
    })
  );
};
