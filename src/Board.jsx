// Louice Rydén

import React from 'react';
import './Board.css';
import createBoardSize from './utils.js';
import Cell from './Cell';

class Board extends React.Component {
  constructor(props) {
    super(props);
    // State of the game
    this.state = {
      createBoard: createBoardSize(this.amountOf.cells, this.amountOf.mines),
      gameStatus: 'Play! 🎲',
      newGame: false,
    };
  }

  // Variables to decide how many cells & mines
  amountOf = {
    cells: 25,
    mines: 7,
  };

  /* Handles clicks made on each cell, 
  creates a "new state" of the state and maps over it to check for different conditions,
  then changes the state based on those conditions and the recieved data, returns the new state */
  handleCellClick = (recievedData) => {
    this.setState((newState) => {
      newState.createBoard.map((cell) => {
        // Check how many visible cells are false in the new state-array and if it matches the same amount of mines
        const gameWon =
          newState.createBoard.filter((cell) => cell.visible === false)
            .length === this.amountOf.mines;

        if (cell.index === recievedData.index) {
          recievedData.visible = true;
          console.log(newState.createBoard);
        }
        if (recievedData.hasMine) {
          newState.gameStatus = 'Game over! 💣';
          newState.newGame = true;
        }
        if (gameWon) {
          newState.gameStatus = 'Winner! 🏆';
          newState.newGame = true;
        }
        if (newState.newGame === true) {
          cell.visible = true;
        }
      });
      return newState;
    });
  };

  render() {
    return (
      <>
        <h1>M I N E S W E E P E R</h1>
        {/* Display game status and if newGame is true show a "link-button" to start a new game (only refreshes the page) */}
        <div className='player-message'>
          {this.state.gameStatus}
          {this.state.newGame && <a href='/'>Start new game</a>}
        </div>

        {/* Map/loop over the array with cell objects and display a cell component for each cell as a grid on the board */}
        <div className='container'>
          {this.state.createBoard.map((cellObject, i) => {
            return (
              <Cell key={i} cell={cellObject} onClick={this.handleCellClick} />
            );
          })}
        </div>
      </>
    );
  }
}

export default Board;
