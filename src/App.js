import ListMatch from "./components/ListMatch";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ListFinishedMatch from "./components/ListFinishedMatch";
import { Box, Divider, Typography, useMediaQuery } from "@mui/material";
import { AppBox, DividerStyle, ScoreBoardBox, TitleStyle } from "./style";

const mockMatches = [
  { homeTeam: "Mexico", awayTeam: "Canada", homeTeamScore: 0, awayTeamScore: 0, id: uuidv4() },
  { homeTeam: "Spain", awayTeam: "Brazil", homeTeamScore: 0, awayTeamScore: 0, id: uuidv4() },
  { homeTeam: "Germany", awayTeam: "France", homeTeamScore: 0, awayTeamScore: 0, id: uuidv4() },
  { homeTeam: "Uruguay", awayTeam: "Italy", homeTeamScore: 0, awayTeamScore: 0, id: uuidv4() },
  { homeTeam: "Argentina", awayTeam: "Australia", homeTeamScore: 0, awayTeamScore: 0, id: uuidv4() },
];

const App = () => {
  const [finishedMatches, setFinishedMatches] = useState([]);
  const [matches, setMatches] = useState(mockMatches);
  const mediaQuery = useMediaQuery("(max-width:705px)");

  return (
    <Box sx={AppBox}>
      <Typography sx={TitleStyle} variant="h4">
        Football World Cup Score Board
      </Typography>
      <Box sx={ScoreBoardBox} style={mediaQuery ? { flexDirection: "column" } : { flexDirection: "row" }}>
        <ListMatch matches={matches} setFinishedMatches={setFinishedMatches} setMatches={setMatches} />
        <Divider sx={DividerStyle} orientation={mediaQuery ? "horizontal" : "vertical"} />
        <ListFinishedMatch finishedMatches={finishedMatches} />
      </Box>
    </Box>
  );
};

export default App;
