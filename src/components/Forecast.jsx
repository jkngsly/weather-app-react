import { useState, useContext } from "react";
import Card from "./Card.jsx";
import React, { useRef, useEffect } from "react";
import forecasts from "../json/forecasts.json";
import { AppContext } from "../AppContext.js";

export default function Forecast(props) {
  const [dropDownActive, setDropDownActive] = useState(false);
  const [timeline, setTimeline] = useState(7);
  const { unit } = useContext(AppContext);

  const dropDownRef = useRef(null);

  const handleClickOutside = (ref) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (!ref.current.contains(event.target)) {
          setDropDownActive(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  const toggleDropdown = () => {
    setDropDownActive((current) => !current);
  };

  const renderTimelineItem = (days) => {
    if (days === timeline) {
      return false;
    } else {
      return <span onClick={() => setTimeline(days)}>{days} Day Forecast</span>;
    }
  };

  const renderCards = () => {
    let days = [];

    for (let i = 0; i < timeline; i++) {
      var date = new Date();
      days.push(
        <Card key={i} day={i + 1} forecast={forecasts[i]} unit={unit} />
      );
    }

    return days;
  };

  handleClickOutside(dropDownRef);

  return (
    <div id="forecast" className="relative">
      <div
        id="select-timeline"
        className={dropDownActive ? "timeline-focused" : ""}
        onClick={toggleDropdown}
      >
        <span>{timeline} Day Forecast</span>
        <div ref={dropDownRef} id="timeline-dropdown">
          {renderTimelineItem(7)}
          {renderTimelineItem(10)}
          {renderTimelineItem(30)}
        </div>
      </div>
      <div
        id="cards"
        className={
          "container-fluid min-w-max justify-center uppercase pb-6 grid " +
          timeline +
          "-day lg:grid-cols-7 md:grid-cols-4 sm:grid-cols-3"
        }
      >
        {renderCards()}
      </div>
    </div>
  );
}
