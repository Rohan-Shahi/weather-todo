import React from "react";
import CityWeather from "./CityWeather";

export default function Weather() {
  return (
    <>
      <h3 className="text-center pt-4" style={{color: 'rgb(94, 93, 93)'}}>Search Your City Weather</h3>
      <CityWeather />
    </>
  );
}
