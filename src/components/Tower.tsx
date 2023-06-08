import React from "react";

type TowerType = {
  discs: number[];
  isGoal: boolean;
  isSelected: boolean;
  onClick: () => void;
};

export default function Tower({
  discs,
  isGoal,
  isSelected,
  onClick,
}: TowerType) {
  return (
    <div
      className={`tower ${isSelected ? "selected" : ""} ${
        isGoal ? "goal" : ""
      }`}
      onClick={() => onClick()}
    >
      {discs.map((disc, discIdx) => (
        <div
          key={discIdx}
          className="disc"
          data-w={"red"}
          style={{ width: `${disc * 50 + 50}px` }}
        ></div>
      ))}
    </div>
  );
}
