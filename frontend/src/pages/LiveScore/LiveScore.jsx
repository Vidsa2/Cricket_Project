import React, { useState, useEffect } from "react";
import "./LiveScore.css";

const LiveScore = () => {
  // defaultMatch Data, if admin doesn't give this input this is show , 
  //for modeling purpose
  const defaultMatchData = [
    {
      id: "1",
      team1: "Team A",
      team2: "Team B",
      score: "123/4",
      status: "LIVE",
      matchType: "T20",
      currentBattingTeam: "Team A",
      currentBowlingTeam: "Team B",
      players: [
        { name: "Player 1", runs: 20, balls: 15, fours: 2, sixes: 1, strikeRate: 133.3 },
        { name: "Player 2", runs: 30, balls: 20, fours: 3, sixes: 2, strikeRate: 150.0 },
      ],
      bowlers: [
        { name: "Bowler 1", overs: 3, maidens: 0, runs: 18, wickets: 1, economy: 6.0 },
        { name: "Bowler 2", overs: 4, maidens: 1, runs: 20, wickets: 2, economy: 5.0 },
      ],
      commentary: ["Player 1 hits a four!", "Player 2 hits a six!"],
      venue: "Stadium Y",
      startTime: "4:00 PM",
      tossWinner: "Team A",
      playingXI: {
        team1: ["Player 1", "Player 2", "Player 3", "Player 4", "Player 5"],
        team2: ["Player A", "Player B", "Player C", "Player D", "Player E"],
      },
    },
    {
      id: "2",
      team1: "Team C",
      team2: "Team D",
      score: "85/3",
      status: "LIVE",
      matchType: "T20",
      currentBattingTeam: "Team C",
      currentBowlingTeam: "Team D",
      players: [
        { name: "Player 1", runs: 10, balls: 8, fours: 1, sixes: 0, strikeRate: 125.0 },
        { name: "Player 2", runs: 15, balls: 10, fours: 2, sixes: 1, strikeRate: 150.0 },
      ],
      bowlers: [
        { name: "Bowler 1", overs: 2, maidens: 0, runs: 15, wickets: 1, economy: 7.5 },
        { name: "Bowler 2", overs: 3, maidens: 1, runs: 25, wickets: 0, economy: 8.33 },
      ],
      commentary: ["Player 1 plays a cover drive!", "Player 2 hits a six!"],
      venue: "Stadium Z",
      startTime: "5:00 PM",
      tossWinner: "Team C",
      playingXI: {
        team1: ["Player 1", "Player 2", "Player 3", "Player 4", "Player 5"],
        team2: ["Player A", "Player B", "Player C", "Player D", "Player E"],
      },
    },
    {
      id: "3",
      team1: "Team E",
      team2: "Team F",
      score: "150/6",
      status: "LIVE",
      matchType: "ODI",
      currentBattingTeam: "Team E",
      currentBowlingTeam: "Team F",
      players: [
        { name: "Player 1", runs: 50, balls: 40, fours: 4, sixes: 1, strikeRate: 125.0 },
        { name: "Player 2", runs: 45, balls: 35, fours: 5, sixes: 2, strikeRate: 128.6 },
      ],
      bowlers: [
        { name: "Bowler 1", overs: 5, maidens: 0, runs: 30, wickets: 2, economy: 6.0 },
        { name: "Bowler 2", overs: 6, maidens: 1, runs: 35, wickets: 3, economy: 5.83 },
      ],
      commentary: ["Player 1 hits a boundary!", "Player 2 takes a quick single!"],
      venue: "Stadium X",
      startTime: "6:00 PM",
      tossWinner: "Team F",
      playingXI: {
        team1: ["Player 1", "Player 2", "Player 3", "Player 4", "Player 5"],
        team2: ["Player A", "Player B", "Player C", "Player D", "Player E"],
      },
    },
    {
      id: "4",
      team1: "Team G",
      team2: "Team H",
      score: "180/3",
      status: "LIVE",
      matchType: "T20",
      currentBattingTeam: "Team G",
      currentBowlingTeam: "Team H",
      players: [
        { name: "Player 1", runs: 70, balls: 45, fours: 7, sixes: 3, strikeRate: 155.6 },
        { name: "Player 2", runs: 40, balls: 25, fours: 3, sixes: 2, strikeRate: 160.0 },
      ],
      bowlers: [
        { name: "Bowler 1", overs: 4, maidens: 0, runs: 50, wickets: 1, economy: 12.5 },
        { name: "Bowler 2", overs: 4, maidens: 0, runs: 40, wickets: 2, economy: 10.0 },
      ],
      commentary: ["Player 1 hits a six!", "Player 2 smashes a four!"],
      venue: "Stadium Y",
      startTime: "7:00 PM",
      tossWinner: "Team G",
      playingXI: {
        team1: ["Player 1", "Player 2", "Player 3", "Player 4", "Player 5"],
        team2: ["Player A", "Player B", "Player C", "Player D", "Player E"],
      },
    },
    {
      id: "5",
      team1: "Team I",
      team2: "Team J",
      score: "200/5",
      status: "LIVE",
      matchType: "ODI",
      currentBattingTeam: "Team J",
      currentBowlingTeam: "Team I",
      players: [
        { name: "Player 1", runs: 80, balls: 60, fours: 9, sixes: 2, strikeRate: 133.3 },
        { name: "Player 2", runs: 60, balls: 50, fours: 6, sixes: 3, strikeRate: 120.0 },
      ],
      bowlers: [
        { name: "Bowler 1", overs: 6, maidens: 1, runs: 40, wickets: 1, economy: 6.67 },
        { name: "Bowler 2", overs: 5, maidens: 0, runs: 55, wickets: 2, economy: 11.0 },
      ],
      commentary: ["Player 1 drives it past covers!", "Player 2 hits a boundary!"],
      venue: "Stadium W",
      startTime: "8:00 PM",
      tossWinner: "Team I",
      playingXI: {
        team1: ["Player 1", "Player 2", "Player 3", "Player 4", "Player 5"],
        team2: ["Player A", "Player B", "Player C", "Player D", "Player E"],
      },
    },
  ];

  const [matches, setMatches] = useState(defaultMatchData);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [activeTab, setActiveTab] = useState("scorecard");
  const [activeTeam, setActiveTeam] = useState("batting");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMatches = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:4000/api/matches");
        const data = await response.json();
  
        if (data && data.length > 0) {
          setMatches(data);
        } else {
          setMatches(defaultMatchData);
        }
      } catch (error) {
        console.error("Error fetching match data:", error);
        setMatches(defaultMatchData);
      } finally {
        setLoading(false);
      }
    };
    fetchMatches();
  }, []);
  

  const handleMatchClick = (match) => {
    setSelectedMatch(match);
    setActiveTab("scorecard");
  };

  const handleBackClick = () => {
    setSelectedMatch(null);
  };

  return (
    <div className="live-score-wrapper">
      <div className="background-overlay"></div>
      <div className="live-score-container">
        <h1>Live Cricket Scores</h1>

        {loading ? (
          <p>Loading matches...</p>
        ) : selectedMatch ? (
          <div className="match-details">
            <button className="back-button" onClick={handleBackClick}>
              Back to Matches
            </button>
            {selectedMatch.status === "LIVE" && (
              <p className="match-status">{selectedMatch.status}</p>
            )}
            <div className="content">
              <div className="score-summary">
                <div className="match-summary">
                  <div className="teams">
                    <div className="team">
                      <img
                        src={selectedMatch.logo1 || "default-logo.png"}
                        alt="logo"
                        className="team-logo"
                      />
                      <span className="team-name">{selectedMatch.team1}</span>
                      {selectedMatch.currentBattingTeam === selectedMatch.team1 && (
                        <p className="team-score">{selectedMatch.score}</p>
                      )}
                    </div>
                    <div className="team">
                      <img
                        src={selectedMatch.logo2 || "default-logo.png"}
                        alt="logo"
                        className="team-logo"
                      />
                      <span className="team-name">{selectedMatch.team2}</span>
                      {selectedMatch.currentBattingTeam === selectedMatch.team2 && (
                        <p className="team-score">{selectedMatch.score}</p>
                      )}
                    </div>
                  </div>
                  <p className="match-type">{selectedMatch.matchType}</p>
                </div>
              </div>
              <div className="tabs">
                <button
                  onClick={() => setActiveTab("scorecard")}
                  className={activeTab === "scorecard" ? "active" : ""}
                >
                  Scorecard
                </button>
                <button
                  onClick={() => setActiveTab("commentary")}
                  className={activeTab === "commentary" ? "active" : ""}
                >
                  Commentary
                </button>
                <button
                  onClick={() => setActiveTab("info")}
                  className={activeTab === "info" ? "active" : ""}
                >
                  Info
                </button>
              </div>
              <div className="tab-content">
                {activeTab === "scorecard" && (
                  <div className="scorecard">
                    <div style={{ marginBottom: "10px" }}>
                      <button
                        onClick={() => setActiveTeam("batting")}
                        style={{ marginRight: "10px" }}
                      >
                        Show Batting Team Scorecard
                      </button>
                      <button onClick={() => setActiveTeam("playingXI")}>
                        Show Next Team Playing XI
                      </button>
                    </div>
                    {activeTeam === "batting" && (
                      <>
                        <h3>Batting</h3>
                        <table>
                          <thead>
                            <tr>
                              <th>Player</th>
                              <th>R</th>
                              <th>B</th>
                              <th>4s</th>
                              <th>6s</th>
                              <th>S/R</th>
                            </tr>
                          </thead>
                          <tbody>
                            {selectedMatch.players.map((player, index) => (
                              <tr key={index}>
                                <td>{player.name}</td>
                                <td>{player.runs}</td>
                                <td>{player.balls}</td>
                                <td>{player.fours}</td>
                                <td>{player.sixes}</td>
                                <td>{player.strikeRate}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        <h3>Bowling</h3>
                        <table>
                          <thead>
                            <tr>
                              <th>Bowler</th>
                              <th>O</th>
                              <th>M</th>
                              <th>R</th>
                              <th>W</th>
                              <th>E</th>
                            </tr>
                          </thead>
                          <tbody>
                            {selectedMatch.bowlers.map((bowler, index) => (
                              <tr key={index}>
                                <td>{bowler.name}</td>
                                <td>{bowler.overs}</td>
                                <td>{bowler.maidens}</td>
                                <td>{bowler.runs}</td>
                                <td>{bowler.wickets}</td>
                                <td>{bowler.economy}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </>
                    )}
                    {activeTeam === "playingXI" && (
                     <div>
                       <h3>Playing XI</h3>
                           {selectedMatch && selectedMatch.currentBowlingTeam === selectedMatch.team1 && (
                        <ul>
                            {selectedMatch.playingXI.team1.map((player, index) => (
                            <li key={index}>{player}</li>
                            ))}
                        </ul>
                       )}
                          {selectedMatch && selectedMatch.currentBowlingTeam === selectedMatch.team2 && (
                           <ul>
                             {selectedMatch.playingXI.team2.map((player, index) => (
                             <li key={index}>{player}</li>
                             ))}
                            </ul>
                         )}
                     </div>
                   )}

                  </div>
                )}
                {activeTab === "commentary" && (
                  <div className="commentary">
                    <h3>Live Commentary</h3>
                    <ul>
                      {selectedMatch.commentary.map((comment, index) => (
                        <li key={index}>{comment}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {activeTab === "info" && (
                  <div className="info">
                    <h3>Match Info</h3>
                    <p>Venue: {selectedMatch.venue}</p>
                    <p>Start Time: {selectedMatch.startTime}</p>
                    <p>Toss Winner: {selectedMatch.tossWinner}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="match-list">

  <div className="matches">
    {matches.map((match) => (
      <div
        key={match.id}
        className="match-card"
        onClick={() => handleMatchClick(match)}
      >
        <div className="match-summary">
          <div className="teams">
            <div className="team">
              <img
                src={match.logo1 || "default-logo.png"}
                alt="logo"
                className="team-logo"
              />
              <span className="team-name">{match.team1}</span>
              {match.currentBattingTeam === match.team1 && (
                      <p className="team-score">{match.score}</p>
                    )}
            </div>
            <div className="team">
              <img
                src={match.logo2 || "default-logo.png"}
                alt="logo"
                className="team-logo"
              />
              <span className="team-name">{match.team2}</span>
              {match.currentBattingTeam === match.team2 && (
                      <p className="team-score">{match.score}</p>
                    )}
            </div>
          </div>
          <p className="match-type">{match.matchType}</p>
        </div>
      </div>
    ))}
  </div>
</div>

        )}
      </div>
    </div>
  );
};

export default LiveScore;