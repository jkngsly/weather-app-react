import { getDate } from "../util/date.js";

export default function Card(props) {
  const high =
    props.unit === "f"
      ? props.forecast.fahrenheit.high
      : props.forecast.celcius.high;
  const low =
    props.unit === "f"
      ? props.forecast.fahrenheit.low
      : props.forecast.celcius.low;
  const feelsLike =
    props.unit === "f"
      ? props.forecast.fahrenheit.feelsLike
      : props.forecast.celcius.feelsLike;

  return (
    <div className="forecast-card flex flex-col">
      <span className="mt-5 text-center">{getDate(props.day)}</span>
      <span className="mb-5 mt-5 text-center">
        {high}°/{low}°
      </span>
      <span className="mb-3 text-left">
        Feels like <span>{feelsLike}°</span>
      </span>
      <span className="mb-3 text-left">
        Wind
        <span>
          {props.forecast.wind} <span className="lowercase">mph</span>
          <span
            className={
              "float-left relative wind " + props.forecast.windDirection
            }
          ></span>
        </span>
      </span>
      <span className="mb-3 text-left">
        Humidity <span>{props.forecast.humidity}%</span>
      </span>
    </div>
  );
}
