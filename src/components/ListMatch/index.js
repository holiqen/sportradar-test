import React from "react";
import { Box, Typography } from "@mui/material";
import Match from "../Match";

const ListMatchBox = {
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
};

const ListMatch = ({ matches, setFinishedMatches, setMatches }) => {
  return (
    <Box sx={ListMatchBox}>
      <Typography variant="h4">Matches:</Typography>
      {matches.length === 0 && <Typography variant="h6">No matches</Typography>}
      {matches &&
        matches.map((match) => {
          return <Match key={match.id} match={match} setFinishedMatches={setFinishedMatches} setMatches={setMatches} />;
        })}
    </Box>
  );
};

export default ListMatch;
