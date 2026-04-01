import React from "react";

export default function WeatherIcon(props) {
  return (
    <div className="WeatherIcon">
      <img
        src={`https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`}
        alt={response.data.condition.description}
      />
      ,
    </div>
  );
}
