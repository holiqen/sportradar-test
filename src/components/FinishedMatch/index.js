import React from "react";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";

const MatchBox = {
  width: "300px",
  margin: "1rem 1rem",
};

const MatchCard = {
  minWidth: "275px",
  padding: "1rem 1rem",
};

const MatchScore = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const FinishedMatch = ({ finishedMatch }) => {
  return (
    <Box sx={MatchBox}>
      <Card sx={MatchCard}>
        <Box sx={MatchScore}>
          <Typography variant="h5">{finishedMatch.homeTeam}</Typography>
          <Typography variant="h5">{finishedMatch.awayTeam}</Typography>
        </Box>
        <Box sx={MatchScore}>
          <Typography variant="h5">{finishedMatch.homeTeamScore}</Typography>
          <Typography variant="h5">{finishedMatch.awayTeamScore}</Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default FinishedMatch;
