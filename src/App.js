import ListMatch from "./components/ListMatch";
import { useState } from "react";
import ListFinishedMatch from "./components/ListFinishedMatch";
import { Box, Divider, Typography, useMediaQuery } from "@mui/material";
import { AppBox, DividerStyle, ScoreBoardBox, TitleStyle } from "./style";
import { mockMatches } from "./utils";

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
