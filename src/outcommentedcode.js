// BOARD COMPONENT IN CONSTRUCTOR

/*  console.log(
      (this.state.createBoard[0].numberOfNeighbouringMines = 50),
      (this.state.createBoard[0].visible = true)
    );  */ // test to see if page updates with new value
/* console.log(this.createNewBoard())
    this.createNewBoard = this.createNewBoard.bind(this); */
// console.log(this.state.createBoard)
// this.state = {
//   index: 0,
//   hasMine: false,
//   numberOfNeighbouringMines: 0,
//   visible: false,
// };

// BOARD COMPONENTET OUTSIDE CONSTRUCTOR

/*  createNewBoard() {
    this.setState(this.createBoardSize);
    FÅR INTE ÄNDRA STATE DIREKT, MÅSTE FÅ IN SETSTATE PÅ NÅGOT VIS
  } */

/*  recievedDataFromCell = (data) => {
    console.log(data);
    const newState = [...this.state.createBoard]
    this.setState(data);
    console.log(newState)
  }; */

// SETSTATE ORIGINAL CODE

/* recievedDataFromCell = data => {
    this.setState(state => {
      const board = state.createBoard.map((item, j) => {
        if (item.numberOfNeighbouringMines === data.numberOfNeighbouringMines) {
          console.log(data.numberOfNeighbouringMines);
          return data.numberOfNeighbouringMines = 10;
        } else {
          console.log(item)
          return item;
        }
      });

      return {
        board,
      };
    });
  }; */
