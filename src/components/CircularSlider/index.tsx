import React from "react";
import CircularSlider from "@fseehawer/react-circular-slider";
import { CircularRangeSliderProps } from "./types";

const CircularRangeSlider: React.FC<CircularRangeSliderProps> = ({
  value,
  label,
  max
}) => {
  return (
    <div className="circular-slider-container">
      <CircularSlider
        label={label}
        labelColor="#005a58"
        knobColor="#005a58"
        progressColorFrom="#00bfbd"
        progressColorTo="#009c9a"
        progressSize={24}
        trackColor="#eeeeee"
        trackSize={24}
        dataIndex={value}
        hideKnob={true}
        max={max || 100}
        onChange={(value: number) => {}}
        knobDraggable={false}
      />
    </div>
  );
};

export default CircularRangeSlider;
