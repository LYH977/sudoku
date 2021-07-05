import React from "react";
import "./Sudoku.css";
import CSS from "csstype";

type Props = {
  index: number;
  data: Array<Array<number | string>>;
};
const Sudoku: React.FC<Props> = ({ index, data }) => {
  const TOP_LEFT = [0, 3, 6];
  const BTM_RIGHT = [2, 5, 8];
  let mar: CSS.Property.Margin<string | number> = "10px";
  // const data = [
  //   [1, 7, 5, 4, 2, 6, 9, 8, 3],
  //   [6, 4, 2, 9, 3, 8, 5, 1, 7],
  //   [9, 8, 3, 1, 5, 7, 6, 4, 2],
  //   [7, 6, 8, 5, 1, 3, 4, 2, 9],
  //   [3, 2, 9, 6, 8, 4, 7, 5, 1],
  //   [4, 5, 1, 7, 9, 2, 3, 6, 8],
  //   [2, 3, 7, 8, 6, 5, 1, 9, 4],
  //   [5, 9, 4, 2, 7, 1, 8, 3, 6],
  //   [8, 1, 6, 3, 4, 9, 2, 7, 5],
  // ];
  let modIndex = index % 6;
  switch (modIndex) {
    case 1:
    case 2:
      mar = "3px 10px 10px 10px";
      break;
    case 5:
    case 0:
      mar = "10px 10px 8px 10px";
      break;
    default:
      break;
  }

  return (
    <div className="flex">
      {index}
      <div
        className="sudoku-container"
        style={{
          margin: mar,
        }}
      >
        {data.map((row, r) => {
          return row.map((column, c) => {
            let top: CSS.Property.BorderTopWidth = TOP_LEFT.includes(r) ? "3px" : "1px";
            let right: CSS.Property.BorderRightWidth = BTM_RIGHT.includes(c) ? "3px" : "1px";
            let btm: CSS.Property.BorderBottomWidth = BTM_RIGHT.includes(r) ? "3px" : "1px";
            let left: CSS.Property.BorderLeftWidth = TOP_LEFT.includes(c) ? "3px" : "1px";
            return (
              <div
                className="sudoku-unit"
                style={{
                  borderTopWidth: top,
                  borderRightWidth: right,
                  borderBottomWidth: btm,
                  borderLeftWidth: left,
                }}
              >
                {column}
              </div>
            );
          });
        })}
      </div>
    </div>
  );
};

export default Sudoku;
