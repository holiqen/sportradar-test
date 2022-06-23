export const getSortedFinishedMatches = (finishedMatches) => {
  if (!finishedMatches) {
    return [];
  }

  const newFinishedMatches = [...finishedMatches];

  return newFinishedMatches.sort((a, b) => {
    const aScore = a.homeTeamScore + a.awayTeamScore;
    const bScore = b.homeTeamScore + b.awayTeamScore;

    if (aScore > bScore) {
      return -1;
    }
    if (aScore < bScore) {
      return 1;
    }
    return -1;
  });
};
