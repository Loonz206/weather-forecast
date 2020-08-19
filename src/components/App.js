import React from "react";
import SearchBar from "../containers/SearchBar";
import WeatherList from "../containers/WeatherList";
import "../style/style.css";

const App = () => {
  const google = window.google;

  const descriptions = [
    "City",
    "Temperature (K)",
    "Pressure (hPa)",
    "Humidity (%)",
  ];
  return (
    <div className="ui container">
      <SearchBar />
      <WeatherList descriptions={descriptions} google={google} />
    </div>
  );
};

export default App;
