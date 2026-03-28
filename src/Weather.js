import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>

      <h1> London</h1>
      <ul>
        <li>Saturday 09:00</li>
        <li> Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://www.gstatic.com/weather/conditions/v1/svg/mostly_sunny_light.svg"
            alt="Partly Sunny"
          />
          8°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 2%</li>
            <li>Humidity: 53%</li>
            <li>Wind: 12 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
