import React from "react";
import { Box, Typography } from "@mui/material";
import Match from "../Match";
import { ListMatchBox, ListStyle, TitleStyle } from "./style";

const ListMatch = ({ matches, setFinishedMatches, setMatches }) => {
  return (
    <Box sx={ListMatchBox}>
      <Typography sx={TitleStyle} variant="h4">
        Matches:
      </Typography>
      {matches.length === 0 && (
        <Typography sx={TitleStyle} variant="h6">
          No matches
        </Typography>
      )}
      <Box sx={ListStyle}>
        {matches &&
          matches.map((match) => {
            return (
              <Match key={match.id} match={match} setFinishedMatches={setFinishedMatches} setMatches={setMatches} />
            );
          })}
      </Box>
    </Box>
  );
};

export default ListMatch;
