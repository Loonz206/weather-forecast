import React from "react";
import { connect } from "react-redux";

const WeatherList = ({ descriptions, weather }) => {
  const renderWeather = (cityData) => {
    const temps = cityData.list.map((weather) => weather.main.temp);
    console.log(temps);
    return (
      <tr key={cityData.city.name}>
        <td>{cityData.city.name}</td>
      </tr>
    );
  };
  const renderTableHeaders = descriptions.map((description) => {
    return <th key={description}>{description}</th>;
  });
  return (
    <table className="ui celled table">
      <thead>
        <tr>{renderTableHeaders}</tr>
      </thead>
      <tbody>{weather.map(renderWeather)}</tbody>
    </table>
  );
};

const mapStateToProps = ({ weather }) => {
  return { weather };
};

export default connect(mapStateToProps)(WeatherList);
