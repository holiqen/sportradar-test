import { getSortedFinishedMatches } from "../src/components/ListFinishedMatch/ListFinishedMatch";

describe("ListFinishedMatch Test", () => {
  it("Get Sorted Matches", () => {
    const mockMatches = [
      { homeTeam: "Mexico", awayTeam: "Canada", homeTeamScore: 2, awayTeamScore: 1 },
      { homeTeam: "Spain", awayTeam: "Brazil", homeTeamScore: 3, awayTeamScore: 0 },
      { homeTeam: "Germany", awayTeam: "France", homeTeamScore: 0, awayTeamScore: 0 },
      { homeTeam: "Uruguay", awayTeam: "Italy", homeTeamScore: 0, awayTeamScore: 2 },
      { homeTeam: "Argentina", awayTeam: "Australia", homeTeamScore: 5, awayTeamScore: 3 },
    ];

    const mockResultSortedMatches = [
      { homeTeam: "Argentina", awayTeam: "Australia", homeTeamScore: 5, awayTeamScore: 3 },
      { homeTeam: "Spain", awayTeam: "Brazil", homeTeamScore: 3, awayTeamScore: 0 },
      { homeTeam: "Mexico", awayTeam: "Canada", homeTeamScore: 2, awayTeamScore: 1 },
      { homeTeam: "Uruguay", awayTeam: "Italy", homeTeamScore: 0, awayTeamScore: 2 },
      { homeTeam: "Germany", awayTeam: "France", homeTeamScore: 0, awayTeamScore: 0 },
    ];
    const mockSortedMatches = getSortedFinishedMatches(mockMatches);

    expect(mockSortedMatches).toStrictEqual(mockResultSortedMatches);
  });

  it("Get Sorted Finished Matches with empty array", () => {
    const mockMatches = [];
    const mockResultSortedMatches = [];
    const mockSortedMatches = getSortedFinishedMatches(mockMatches);

    expect(mockSortedMatches).toStrictEqual(mockResultSortedMatches);
  });

  it("Get Sorted Finished Matches with null", () => {
    const mockMatches = null;
    const mockResultSortedMatches = [];
    const mockSortedMatches = getSortedFinishedMatches(mockMatches);

    expect(mockSortedMatches).toStrictEqual(mockResultSortedMatches);
  });

  it("Get Sorted Finished Matches with undefined", () => {
    const mockMatches = undefined;
    const mockResultSortedMatches = [];
    const mockSortedMatches = getSortedFinishedMatches(mockMatches);

    expect(mockSortedMatches).toStrictEqual(mockResultSortedMatches);
  });

  it("Get Sorted Finished Matches with 2 matches", () => {
    const mockMatches = [
      { homeTeam: "Mexico", awayTeam: "Canada", homeTeamScore: 2, awayTeamScore: 1 },
      { homeTeam: "Spain", awayTeam: "Brazil", homeTeamScore: 3, awayTeamScore: 0 },
    ];
    const mockResultSortedMatches = [
      { homeTeam: "Spain", awayTeam: "Brazil", homeTeamScore: 3, awayTeamScore: 0 },
      { homeTeam: "Mexico", awayTeam: "Canada", homeTeamScore: 2, awayTeamScore: 1 },
    ];
    const mockSortedMatches = getSortedFinishedMatches(mockMatches);

    expect(mockSortedMatches).toStrictEqual(mockResultSortedMatches);
  });

  it("Get Sorted Finished Matches with add new match", () => {
    const mockMatches = [
      { homeTeam: "Mexico", awayTeam: "Canada", homeTeamScore: 2, awayTeamScore: 1 },
      { homeTeam: "Spain", awayTeam: "Brazil", homeTeamScore: 0, awayTeamScore: 0 },
    ];
    const updateMockMatches = [
      ...mockMatches,
      { homeTeam: "Uruguay", awayTeam: "Italy", homeTeamScore: 0, awayTeamScore: 8 },
    ];
    const mockResultSortedMatches = [
      { homeTeam: "Uruguay", awayTeam: "Italy", homeTeamScore: 0, awayTeamScore: 8 },
      { homeTeam: "Mexico", awayTeam: "Canada", homeTeamScore: 2, awayTeamScore: 1 },
      { homeTeam: "Spain", awayTeam: "Brazil", homeTeamScore: 0, awayTeamScore: 0 },
    ];
    const mockSortedMatches = getSortedFinishedMatches(updateMockMatches);

    expect(mockSortedMatches).toStrictEqual(mockResultSortedMatches);
  });
});
