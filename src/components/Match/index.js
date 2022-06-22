import React, { memo, useState } from "react";
import { Box, Divider, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import UpdateIcon from "@mui/icons-material/Update";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";

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

const HiddenMatchScore = {
  display: "flex",
  visibility: "hidden",
};

const ButtonsBox = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "1rem",
};

const getRandomScore = () => {
  return Math.floor(Math.random() * 11);
};

const Match = ({ match, setFinishedMatches, setMatches }) => {
  const [isGameStart, setIsGameStart] = useState(false);
  const [isGameUpdate, setIsGameUpdate] = useState(false);
  const [updateMatch, setUpdateMatch] = useState(match);

  const handleStartGame = () => {
    setIsGameStart(true);
  };

  const handleUpdateScore = () => {
    setUpdateMatch((prevMatch) => ({ ...prevMatch, homeTeamScore: getRandomScore(), awayTeamScore: getRandomScore() }));
    setIsGameUpdate(true);
  };

  const handleFinishGame = () => {
    setFinishedMatches((prevFinishedMatches) => [...prevFinishedMatches, updateMatch]);
    setMatches((prevMatches) => prevMatches.filter((match) => match.id !== updateMatch.id));
  };

  const mayMatchFinish = !isGameStart || !isGameUpdate;
  const mayMatchUpdate = !isGameStart || isGameUpdate;

  return (
    <Box sx={MatchBox}>
      <Card sx={MatchCard}>
        <Box sx={MatchScore}>
          <Typography variant="h5">{updateMatch.homeTeam}</Typography>
          <Typography variant="h5">{updateMatch.awayTeam}</Typography>
        </Box>
        <Box sx={isGameStart ? MatchScore : HiddenMatchScore}>
          <Typography variant="h5">{updateMatch.homeTeamScore}</Typography>
          <Typography variant="h5">{updateMatch.awayTeamScore}</Typography>
        </Box>
        <Divider />
        <Box sx={ButtonsBox}>
          <Stack direction="row" spacing={1}>
            <IconButton color="success" onClick={handleStartGame} disabled={isGameStart}>
              <AlarmOnIcon />
            </IconButton>
            <IconButton color="secondary" onClick={handleUpdateScore} disabled={mayMatchUpdate}>
              <UpdateIcon />
            </IconButton>
            <IconButton color="success" onClick={handleFinishGame} disabled={mayMatchFinish}>
              <CheckCircleOutlineIcon />
            </IconButton>
          </Stack>
        </Box>
      </Card>
    </Box>
  );
};

export default memo(Match);
