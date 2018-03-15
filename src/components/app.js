import React, { Component } from 'react';
import SearchBar from '../container/search_bar';
import WeatherList from '../container/weather_list';


export default class App extends Component {
  render() {
    return (
      <div>
      <h4>WEATHER APP</h4>
      <SearchBar />
      <WeatherList />
      </div>

    );
  }
}
