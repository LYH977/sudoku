import React, { useRef } from 'react';
import Sudoku from './components/Sudoku';
import ques from './components/ques';
import ans from './components/ans';

import './App.css';
import ReactToPrint from 'react-to-print';

function App() {
  const inputRef = useRef<any>(null);
  const QUES: string = 'Question';
  const ANS: string = 'Answer';

  const type = ANS;

  const selectedSudoku = type === QUES ? ques : ans;
  return (
    <div className='App'>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => inputRef.current}
      />

      <div className='sudoku-collection' ref={inputRef}>
        {selectedSudoku.map(
          (datum: Array<Array<number | string>>, index: number) => {
            return (
              <Sudoku index={index + 1} data={datum} key={index} type={type} />
            );
            //
          }
        )}
      </div>
    </div>
  );
}

export default App;
