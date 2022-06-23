import { getRandomScore, getWinner } from "../src/components/Match/Match";

describe("Match Test", () => {
  it("Get Winner Test", () => {
    expect(getWinner(8, 4)).toBe("homeTeam");
    expect(getWinner(4, 8)).toBe("awayTeam");
    expect(getWinner(0, 0)).toBe("draw");
  });

  it("Get Random Score", () => {
    const mockRandomScores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const randomScore = getRandomScore();
    const mockRandomScore = [-1, 11];

    expect(mockRandomScores.includes(randomScore)).toBeTruthy();
    expect(mockRandomScores.includes(mockRandomScore[0])).toBeFalsy();
    expect(mockRandomScores.includes(mockRandomScore[1])).toBeFalsy();
  });
});
