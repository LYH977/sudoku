import React, { useRef } from 'react';
import Sudoku from './components/Sudoku';
import ques from './components/ques';
import ans from './components/ans';

import './App.css';
import ReactToPrint from 'react-to-print';

function App() {
  const inputRef = useRef<any>(null);

  return (
    <div className='App'>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => inputRef.current}
      />

      <div className='sudoku-collection' ref={inputRef}>
        {ans.map((datum: Array<Array<number | string>>, index: number) => {
          return <Sudoku index={index + 1} data={datum} key={index} />;
          //
        })}
      </div>
    </div>
  );
}

export default App;
