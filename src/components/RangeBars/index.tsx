import React from "react";
import { RangeBarProps } from "./types";
import "./styles.css";
import Bar from "./Bar";
import { mapColorToRange, RangeHeading } from "./constants";

const RangeBars: React.FC<RangeBarProps> = ({ onChange, value, max }) => {
  const maxRange: number = max || 5;
  const renderBars = (): React.ReactNode => {
    const bars = [];
    for (let i = maxRange; i >= 0; i--) {
      bars.push(
        <div key={i}>
          <Bar
            size={(i + 1) * 10}
            onClick={() => onChange(i)}
            isActive={i <= value}
          />
        </div>
      );
    }
    return bars;
  };

  const renderRangeHeading = ((): RangeHeading => {
    if (maxRange === value) return RangeHeading.HIGH;
    if (value >= Math.floor(maxRange / 2)) return RangeHeading.MEDIUM;
    return RangeHeading.LOW;
  })();

  return (
    <div className="bar-container mt-5">
      <h3 className={"text-center " + mapColorToRange[renderRangeHeading]}>
        {renderRangeHeading}
      </h3>
      {renderBars()}
    </div>
  );
};

export default RangeBars;
