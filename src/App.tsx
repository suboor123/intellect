import "./App.css";
import Navbar from "./components/Navbar";
import "rsuite/dist/rsuite.min.css";
import React, { useMemo, useState } from "react";
import CircularRangeSlider from "./components/CircularSlider";
import { PageType } from "./components/Navbar/types";
import { Content, Slider } from "rsuite";
import RangeBars from "./components/RangeBars";

function App() {
  const [showCircularRange, setShowCircularRange] = useState<boolean>(true);
  const [activeRange, setActiveRange] = useState<number>(4);
  const [maxRange, setMaxRange] = useState<number>(10);

  const [activeBar, setActiveBar] = useState<number>(3);

  const handleNavigation = (pageType: PageType): void => {
    if (pageType === "circularSlider") setShowCircularRange(true);
    else setShowCircularRange(false);
  };

  const renderCircularRangeSlider = useMemo((): React.ReactNode => {
    return (
      <>
        <CircularRangeSlider
          label="Progress"
          max={maxRange}
          value={activeRange}
        />
        <Slider
          className="mt-5"
          value={activeRange}
          onChange={setActiveRange}
          max={maxRange}
        />
      </>
    );
  }, [showCircularRange, activeRange, maxRange]);

  const renderRangeBars = useMemo((): React.ReactNode => {
    return <RangeBars value={activeBar} onChange={setActiveBar} />;
  }, [activeBar]);

  return (
    <React.Fragment>
      <Navbar onNavigate={handleNavigation} />
      <Content className="container text-center mt-5">
        {showCircularRange && renderCircularRangeSlider}
        {!showCircularRange && renderRangeBars}
      </Content>
    </React.Fragment>
  );
}

export default App;
