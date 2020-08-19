import React from "react";
import { connect } from "react-redux";
import Chart from "../components/Chart";
import GoogleMap from "../components/GoogleMap";

const WeatherList = ({ descriptions, weather, google }) => {
  const renderWeather = (cityData) => {
    const { name } = cityData.city;
    const temps = cityData.list.map((weather) => weather.main.temp);
    const pressures = cityData.list.map((weather) => weather.main.pressure);
    const humidities = cityData.list.map((weather) => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    console.log(pressures);
    return (
      <tr key={name}>
        <td>
          <GoogleMap lon={lon} lat={lat} google={google} />
        </td>
        <td>
          <Chart data={temps} color="orange" units="K" />
        </td>
        <td>
          <Chart data={pressures} color="green" units="hPa" />
        </td>
        <td>
          <Chart data={humidities} color="black" units="%" />
        </td>
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
