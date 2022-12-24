import React from "react";

type TowerType = {
  discs: number[];
  isSelected: boolean;
  onClick: () => void;
};

export default function Tower({ discs, isSelected, onClick }: TowerType) {
  return (
    <div
      className={`tower ${isSelected ? "selected" : ""}`}
      onClick={() => onClick()}
    >
      {discs.map((disc, discIdx) => (
        <div
          key={discIdx}
          className="disc"
          style={{ width: `${disc * 50 + 50}px` }}
        ></div>
      ))}
    </div>
  );
}
