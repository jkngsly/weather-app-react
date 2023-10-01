import { useState, useEffect, useContext } from "react";
import forecasts from "../json/forecasts.json";
import { getDateTime } from "../util/date.js";
import { AppContext } from "../AppContext.js";

export default function Today() {
  const forecast = forecasts[0];

  const [dateTime, setdateTime] = useState(new Date());
  const { unit, setUnit } = useContext(AppContext);

  const temperature =
    unit === "f"
      ? forecast.fahrenheit.temperature
      : forecast.celcius.temperature;
  const feelsLike =
    unit === "f" ? forecast.fahrenheit.feelsLike : forecast.celcius.feelsLike;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setdateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {/* Forecast */}
      <div id="today-top" className="flex flex-row justify-center sunny-cloudy">
        <span style={{ fontSize: "3em" }}>{temperature}°</span>
        <div className="flex flex-col justify-center unit-toggle pl-3">
          <span
            onClick={() => setUnit("f")}
            className={unit === "f" ? "unit-active" : ""}
          >
            F
          </span>
          <span
            onClick={() => setUnit("c")}
            className={unit === "c" ? "unit-active" : ""}
          >
            C
          </span>
        </div>
      </div>
      <div id="today-date" className="font-semibold	mb-4">
        {getDateTime(dateTime)}
      </div>
      {/* Stats */}
      <div
        id="stats"
        className="flex flex-row container-fluid min-w-max justify-center uppercase pt-3 pb-8 sm:pb-8 md:pb-8 lg:pb-4 sm:pl-3"
      >
        <span>
          Feels like <span>{feelsLike}°</span>
        </span>
        <span>
          <span>Wind</span>
          <span className="relative">
            <span className={"absolute wind " + forecast.windDirection}></span>
            {forecast.wind} <span className="lowercase">mph</span>
          </span>
        </span>
        <span>
          Humidity <span>{forecast.humidity}%</span>
        </span>
      </div>
    </>
  );
}
