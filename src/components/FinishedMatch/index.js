import React from "react";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { MatchBox, MatchCard, MatchScore } from "./style";
import { getWinner } from "../Match/Match";

const FinishedMatch = ({ finishedMatch }) => {
  const winner = getWinner(finishedMatch.homeTeamScore, finishedMatch.awayTeamScore);

  return (
    <Box sx={MatchBox}>
      <Card sx={MatchCard}>
        <Box sx={MatchScore}>
          <Typography variant="h5">{finishedMatch.homeTeam}</Typography>
          <Typography variant="h5">{finishedMatch.awayTeam}</Typography>
        </Box>
        <Box sx={MatchScore}>
          <Typography variant="h5" color={winner === "homeTeam" ? "green" : "black"}>
            {finishedMatch.homeTeamScore}
          </Typography>
          <Typography variant="h5" color={winner === "awayTeam" ? "green" : "black"}>
            {finishedMatch.awayTeamScore}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default FinishedMatch;
