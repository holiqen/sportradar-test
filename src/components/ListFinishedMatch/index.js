import React from "react";
import { Box, Typography } from "@mui/material";
import FinishedMatch from "../FinishedMatch";

const ListMatchBox = {
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
};

// TODO - sort finished matches by score and last added

const getSortedFinishedMatches = (finishedMatches) => {
  return finishedMatches.sort((a, b) => {
    if (a.homeTeamScore + a.awayTeamScore > b.homeTeamScore + b.awayTeamScore) {
      return -1;
    }
    if (a.homeTeamScore + a.awayTeamScore < b.homeTeamScore + b.awayTeamScore) {
      return 1;
    }
    return -1;
  });
};

const ListFinishedMatch = ({ finishedMatches }) => {
  const sortedFinishedMatches = getSortedFinishedMatches(finishedMatches);

  return (
    <Box sx={ListMatchBox}>
      <Typography variant="h4">Score Board:</Typography>
      {sortedFinishedMatches.length === 0 && <Typography variant="h6">No matches played</Typography>}
      {sortedFinishedMatches &&
        sortedFinishedMatches.map((finishedMatch) => {
          return <FinishedMatch key={finishedMatch.id} finishedMatch={finishedMatch} />;
        })}
    </Box>
  );
};

export default ListFinishedMatch;
