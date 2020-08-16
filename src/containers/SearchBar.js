/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";

const SearchBar = ({ fetchWeather }) => {
  const [term, setTerm] = useState("");

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(term);
    fetchWeather(term);
    setTerm("");
  };

  return (
    <div className="searchbar ui segment">
      <form action="" className="ui form" onSubmit={onSubmit}>
        <div className="ui fluid action input">
          <input
            type="text"
            value={term}
            onChange={onInputChange}
            placeholder="Get a five day forecast of your favorite cities..."
          />
          <button type="submit" className="ui button">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchWeather }, dispatch);
};

export default connect(null, mapDispatchToProps)(SearchBar);
