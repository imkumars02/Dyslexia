import React, { useState, useEffect, useCallback } from "react";
import "./Puzzle.scss";

const Puzzle = () => {
  const [puzzle, setPuzzle] = useState([]);
  const [userInput, setUserInput] = useState([]);
  const [message, setMessage] = useState("");
  const [showingSolution, setShowingSolution] = useState(false);
  const [difficulty, setDifficulty] = useState(1);
  const gridSize = 4;

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const fillDiagonalBox = useCallback((board, row, base) => {
    const nums = Array.from({ length: base * base }, (_, i) => i + 1);
    shuffleArray(nums);
    for (let i = 0; i < base; i++) {
      for (let j = 0; j < base; j++) {
        board[row + i][row + j] = nums[i * base + j];
      }
    }
  }, []);

  const fillRemaining = useCallback((board) => {
    const isSafe = (board, row, col, num) => {
      for (let x = 0; x < gridSize; x++) {
        if (board[row][x] === num || board[x][col] === num) {
          return false;
        }
      }
      const startRow = row - (row % Math.sqrt(gridSize));
      const startCol = col - (col % Math.sqrt(gridSize));
      for (let i = 0; i < Math.sqrt(gridSize); i++) {
        for (let j = 0; j < Math.sqrt(gridSize); j++) {
          if (board[i + startRow][j + startCol] === num) {
            return false;
          }
        }
      }
      return true;
    };

    const solveHelper = (board) => {
      for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
          if (board[row][col] === 0) {
            for (let num = 1; num <= gridSize; num++) {
              if (isSafe(board, row, col, num)) {
                board[row][col] = num;
                if (solveHelper(board)) {
                  return true;
                }
                board[row][col] = 0; // Backtrack
              }
            }
            return false; // No valid number found
          }
        }
      }
      return true; // Solved
    };

    solveHelper(board);
  }, []);

  const removeNumbers = useCallback(
    (board) => {
      let count = gridSize * difficulty;
      while (count > 0) {
        const i = Math.floor(Math.random() * gridSize);
        const j = Math.floor(Math.random() * gridSize);
        if (board[i][j] !== 0) {
          board[i][j] = 0;
          count--;
        }
      }
    },
    [difficulty]
  );

  const generateSudoku = useCallback(() => {
    const base = Math.sqrt(gridSize);
    const board = Array.from({ length: gridSize }, () =>
      Array(gridSize).fill(0)
    );

    for (let i = 0; i < gridSize; i += base) {
      fillDiagonalBox(board, i, base);
    }

    fillRemaining(board);
    const puzzle = [...board];
    removeNumbers(board);
    return { puzzle, solution: puzzle };
  }, [fillDiagonalBox, fillRemaining, removeNumbers]);

  const handleChange = (rowIndex, colIndex, value) => {
    const newInput = [...userInput];
    newInput[rowIndex][colIndex] = value;
    setUserInput(newInput);
  };

  const checkSolution = () => {
    let isCorrect = true;
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        if (puzzle[i][j] !== 0 && userInput[i][j] !== puzzle[i][j]) {
          isCorrect = false;
          break;
        }
      }
    }
    if (isCorrect) {
      setMessage("Congratulations! You solved the puzzle!");
      increaseDifficulty();
    } else {
      setMessage("Incorrect solution. Try again!");
    }
  };

  const increaseDifficulty = () => {
    if (difficulty < 3) {
      setDifficulty((prev) => prev + 1);
    } else {
      setDifficulty(1);
    }
    resetPuzzle();
  };

  const resetPuzzle = useCallback(() => {
    const { puzzle: newPuzzle } = generateSudoku();
    setPuzzle(newPuzzle);
    setUserInput(
      Array.from({ length: gridSize }, () => Array(gridSize).fill(""))
    );
    setMessage("");
    setShowingSolution(false);
  }, [generateSudoku]);

  const showSolution = () => {
    setShowingSolution(true);
  };

  useEffect(() => {
    resetPuzzle();
  }, [resetPuzzle]);

  const createSudokuGrid = () => {
    return (
      <div className="sudoku-grid">
        {puzzle.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((cell, colIndex) => (
              <input
                className={`cell ${
                  (rowIndex + colIndex) % 2 === 0
                    ? "lightBackground"
                    : "darkBackground"
                }`}
                key={colIndex}
                type="text"
                maxLength="1"
                value={
                  showingSolution
                    ? cell !== 0
                      ? cell
                      : ""
                    : userInput[rowIndex][colIndex] || (cell !== 0 ? cell : "")
                }
                onChange={(e) =>
                  handleChange(rowIndex, colIndex, e.target.value)
                }
                readOnly={cell !== 0 && !showingSolution}
              />
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container">
      <div className="Content1">
        {/* <h1 className="header">Sudoku Puzzle</h1> */}
        <div className="game-container">{createSudokuGrid()}</div>
        <div className="button-container">
          <button className="btn btn-primary" onClick={checkSolution}>
            Check Solution
          </button>
          <button className="btn btn-secondary" onClick={resetPuzzle}>
            Reset
          </button>
          <button className="btn btn-info" onClick={showSolution}>
            Show Solution
          </button>
        </div>
        {message && <div className="message">{message}</div>}
        {showingSolution && (
          <div className="solution-display">
            <div>Sudoku Solution:</div>
            <div className="solution-grid">
              {puzzle.map((row, rowIndex) => (
                <div className="row" key={rowIndex}>
                  {row.map((cell, colIndex) => (
                    <span className="cell" key={colIndex}>
                      {cell}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Puzzle;
