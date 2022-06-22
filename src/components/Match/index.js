import React, { useState } from "react";
import { Box, Divider, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import UpdateIcon from "@mui/icons-material/Update";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";

const MatchBox = {
  width: "300px",
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

const ButtonsBox = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "1rem",
};

const Match = ({ homeTeam, awayTeam, homeTeamScore, awayTeamScore }) => {
  const [isGameStart, setIsGameStart] = useState(false);

  const handleStartGame = () => {
    setIsGameStart(true);
  };

  const handleUpdateScore = () => {

  };

  const handleFinishGame = () => {

  };

  return (
    <Box sx={MatchBox}>
      <Card sx={MatchCard}>
        <Box sx={MatchScore}>
          <Typography variant="h5">{homeTeam}</Typography>
          <Typography variant="h5">{awayTeam}</Typography>
        </Box>
        {isGameStart && <Box sx={MatchScore}>
          <Typography variant="h5">{homeTeamScore}</Typography>
          <Typography variant="h5">{awayTeamScore}</Typography>
        </Box>}
        <Divider />
        <Box sx={ButtonsBox}>
          <Stack direction="row" spacing={1}>
            <IconButton color="error" onClick={handleStartGame} disabled={isGameStart}>
              <FlagCircleIcon />
            </IconButton>
            <IconButton color="secondary" onClick={handleUpdateScore}>
              <UpdateIcon />
            </IconButton>
            <IconButton color="primary" onClick={handleFinishGame}>
              <CheckCircleOutlineIcon color="success" />
            </IconButton>
          </Stack>
        </Box>
      </Card>
    </Box>
  );
};

export default Match;
