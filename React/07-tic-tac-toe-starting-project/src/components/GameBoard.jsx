import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, activePlayer }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const newGameBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      newGameBoard[rowIndex][colIndex] = activePlayer;
      return newGameBoard;
    });

    onSelectSquare();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => {
                return (
                  <li key={colIndex}>
                    <button
                      onClick={() => handleSelectSquare(rowIndex, colIndex)}
                    >
                      {playerSymbol}
                    </button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
}
