import { useState } from "react";
import Tower from "./components/Tower";
import Timer from "./components/Timer";
import "./App.css";

const NUMBER_OF_DISCS = 5;
const NUMBER_OF_TOWERS = 3;
const GOAL_TOWER_IDX = NUMBER_OF_TOWERS - 1; //Last Tower

export default function App() {
  const [selectedIdx, setSelectedIdx] = useState<number | undefined>();
  const [towers, setTowers] = useState<Array<number[]>>([
    Array.from(Array(NUMBER_OF_DISCS).keys()),
    ...getArray(),
  ]);
  const won = towers[GOAL_TOWER_IDX].length === NUMBER_OF_DISCS;

  function getArray() {
    return JSON.parse(JSON.stringify(new Array(NUMBER_OF_TOWERS - 1).fill([])));
  }

  function handleTowerClick(idx: number) {
    if (selectedIdx === undefined) {
      setSelectedIdx(idx);
      return;
    }
    moveDisc(selectedIdx, idx);
    setSelectedIdx(undefined);
  }

  function moveDisc(fromIdx: number, toIdx: number) {
    if (
      towers[fromIdx][0] === undefined ||
      towers[fromIdx][0] > towers[toIdx][0]
    )
      return;
    towers[toIdx].unshift(towers[fromIdx].shift()!);
    setTowers(towers);
  }

  return (
    <div className="App">
      <Timer running={!won} />
      <h1>TOWERS OF HANOI</h1>
      <div className="game">
        {!won ? (
          towers.map((discs, idx) => (
            <Tower
              isGoal={idx == GOAL_TOWER_IDX}
              key={idx}
              discs={discs}
              isSelected={selectedIdx === idx}
              onClick={() => handleTowerClick(idx)}
            />
          ))
        ) : (
          <h2>You Have Won</h2>
        )}
      </div>
    </div>
  );
}
