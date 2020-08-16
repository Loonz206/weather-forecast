import React from "react";
import SearchBar from "../containers/SearchBar";
import WeatherList from "../containers/WeatherList";

const App = () => {
  const descriptions = ["City", "Temperature", "Pressure", "Humidity"];
  return (
    <div className="ui container">
      <SearchBar />
      <WeatherList descriptions={descriptions} />
    </div>
  );
};

export default App;
