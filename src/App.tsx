import React, { useRef } from "react";
import Sudoku from "./components/Sudoku";
import "./App.css";
import ReactToPrint from "react-to-print";

function App() {
  const inputRef = useRef<any>(null);

  return (
    <div className="App">
      <ReactToPrint trigger={() => <button>Print this out!</button>} content={() => inputRef.current} />

      <div className="sudoku-collection" ref={inputRef}>
        <Sudoku index={1} />
        <Sudoku index={2} />
        <Sudoku index={3} />
        <Sudoku index={4} />
        <Sudoku index={5} />
        <Sudoku index={6} />

        <Sudoku index={1} />
        <Sudoku index={2} />
        <Sudoku index={3} />
        <Sudoku index={4} />
        <Sudoku index={5} />
        <Sudoku index={6} />

        <Sudoku index={1} />
        <Sudoku index={2} />
        <Sudoku index={3} />
        <Sudoku index={4} />
        <Sudoku index={5} />
        <Sudoku index={6} />

        <Sudoku index={1} />
        <Sudoku index={2} />
        <Sudoku index={3} />
        <Sudoku index={4} />
        <Sudoku index={5} />
        <Sudoku index={6} />

        <Sudoku index={1} />
        <Sudoku index={2} />
        <Sudoku index={3} />
        <Sudoku index={4} />
        <Sudoku index={5} />
        <Sudoku index={6} />

        <Sudoku index={1} />
        <Sudoku index={2} />
        <Sudoku index={3} />
        <Sudoku index={4} />
        <Sudoku index={5} />
        <Sudoku index={6} />

        <Sudoku index={1} />
        <Sudoku index={2} />
        <Sudoku index={3} />
        <Sudoku index={4} />
        <Sudoku index={5} />
        <Sudoku index={6} />

        <Sudoku index={1} />
        <Sudoku index={2} />
        <Sudoku index={3} />
        <Sudoku index={4} />
        <Sudoku index={5} />
        <Sudoku index={6} />

        <Sudoku index={1} />
        <Sudoku index={2} />
        <Sudoku index={3} />
        <Sudoku index={4} />
        <Sudoku index={5} />
        <Sudoku index={6} />

        <Sudoku index={1} />
        <Sudoku index={2} />
        <Sudoku index={3} />
        <Sudoku index={4} />
        <Sudoku index={5} />
        <Sudoku index={6} />
      </div>
    </div>
  );
}

export default App;
