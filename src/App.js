import React from "react";
import './App.css';
import UserInputForm from "./UserInputForm/UserInputForm";
import CurrentDayForecast from "./CurrentDayForecast/CurrentDayForecast";
import NextDaysForecast from "./NextDaysForecast/NextDaysForecast";

import axios from 'axios';

const apiForWeather = {
    key: "b35a515c553dadf34292da5798253cbf",
    base: "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}"
}

class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            weather: undefined,
            locationName: ''
        };
    }

    searchForCity = async (location) => {
        let locationData = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${apiForWeather.key}`)
            .then(result => {
                return result
            });
        // get lat and long from the result
        let locationLat = locationData["data"][0]["lat"].toFixed(2);
        let locationLong = locationData["data"][0]["lon"].toFixed(2);

        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${locationLat}&lon=${locationLong}&units=metric&appid=b35a515c553dadf34292da5798253cbf`)
            .then(result => console.log(result));
    }

    handleInputValue = (inputValue) => {
        if(inputValue.length > 0){
            this.searchForCity(inputValue);
        }
    }

      render() {
          return (
              <div className="App">
                  <main className="appContainer">
                      <UserInputForm handleInputValue={this.handleInputValue} />
                      <CurrentDayForecast content={this.state.locationName}/>
                      <NextDaysForecast />
                  </main>
              </div>
          );
      }
}

export default App;
