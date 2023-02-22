// Louice Rydén

import './Cell.css';

function Cell(props) {
  // Send the individual cell data to the onClick-prop function in the board component
  const sendDataToBoard = () => {
    props.onClick(props.cell);
  };

  // Renders the numberOfNeighbouringMines property of the cell differently based on conditions
  const renderCellData = () => {
    if (props.cell.visible === true && !props.cell.hasMine) {
      return props.cell.numberOfNeighbouringMines;
    }
    if (props.cell.numberOfNeighbouringMines === 0) {
      return (props.cell.numberOfNeighbouringMines = null);
    }
  };

  // Determine which class to show based on conditions
  const classes = `
    ${props.cell.visible === true && !props.cell.hasMine ? 'neighbour' : 'cell'}
    ${props.cell.hasMine && props.cell.visible ? 'mine' : 'cell'}
`;

  return (
    <div className={classes} onClick={sendDataToBoard}>
      {renderCellData()}
    </div>
  );
}

export default Cell;
