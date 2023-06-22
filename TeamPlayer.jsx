import React from 'react';
import WidgetWrapper from 'components/WidgetWrapper';

class Player {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }
}

class TeamPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      playerName: '',
      playerPosition: '',
      editingIndex: -1,
    };
  }

  addPlayer = () => {
    const { players, playerName, playerPosition } = this.state;
    const player = new Player(playerName, playerPosition);
    this.setState({
      players: [...players, player],
      playerName: '',
      playerPosition: '',
    });
  };

  updatePlayer = () => {
    const { players, playerName, playerPosition, editingIndex } = this.state;
    const updatedPlayers = [...players];
    updatedPlayers[editingIndex] = new Player(playerName, playerPosition);
    this.setState({
      players: updatedPlayers,
      playerName: '',
      playerPosition: '',
      editingIndex: -1,
    });
  };

  deletePlayer = (index) => {
    const { players } = this.state;
    const updatedPlayers = [...players];
    updatedPlayers.splice(index, 1);
    this.setState({ players: updatedPlayers });
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  editPlayer = (index) => {
    const { players } = this.state;
    const player = players[index];
    this.setState({
      playerName: player.name,
      playerPosition: player.position,
      editingIndex: index,
    });
  };

  render() {
    const { players, playerName, playerPosition, editingIndex } = this.state;

    return (
      <WidgetWrapper>
        <div>
          <h2>Team Players</h2>

          <div>
            <label>Player Name:</label>
            <input
              type="text"
              name="playerName"
              value={playerName}
              onChange={this.handleInputChange}
            />
          </div>

          <div>
            <label>Position:</label>
            <input
              type="text"
              name="playerPosition"
              value={playerPosition}
              onChange={this.handleInputChange}
            />
          </div>

          {editingIndex === -1 ? (
            <button onClick={this.addPlayer}>Add Player</button>
          ) : (
            <div>
              <button onClick={this.updatePlayer}>Update Player</button>
              <button
                onClick={() =>
                  this.setState({ playerName: '', playerPosition: '', editingIndex: -1 })
                }
              >
                Cancel
              </button>
            </div>
          )}

          <ul>
            {players.map((player, index) => (
              <li key={index}>
                {player.name} - Position: {player.position}
                <button onClick={() => this.editPlayer(index)}>Edit</button>
                <button onClick={() => this.deletePlayer(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </WidgetWrapper>
    );
  }
}

export default TeamPlayer;
