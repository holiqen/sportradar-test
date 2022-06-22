import "./App.css";
import ListMatch from "./components/ListMatch";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ListFinishedMatch from "./components/ListFinishedMatch";

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

  return (
    <div className="App">
      <ListMatch matches={matches} setFinishedMatches={setFinishedMatches} setMatches={setMatches} />
      <ListFinishedMatch finishedMatches={finishedMatches} />
    </div>
  );
};

export default App;
