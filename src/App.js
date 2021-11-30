import React from "react";
import './App.css';
import UserInputForm from "./UserInputForm/UserInputForm";

import axios from 'axios';
import CityName from "./CityName/CityName";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";
import Forecast from "./Forecast/Forecast";

const apiForWeather = {
    key: "b35a515c553dadf34292da5798253cbf",
    base: "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}"
}

class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            weather: undefined,
            locationName: '',
            infoLoaded: false,
            infoRequested: false
        };
    }

    searchForCity = async (location) => {

        this.setState({infoLoaded: false});
        this.setState({infoRequested: true});

        //get coordinates(lat, long) of the city
        let locationData = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${apiForWeather.key}`)
            .then(result => {
                return result
            })
            .catch(err => {
                console.log(err);
            });

        // get lat and long from the result
        if(locationData["data"].length > 0){
            let locationLat = locationData["data"][0]["lat"].toFixed(2);
            let locationLong = locationData["data"][0]["lon"].toFixed(2);

            this.setState({locationName: locationData["data"][0]["name"]});

            //get weather for provided coodrinates(lat, long)
            this.getWeatherForGivenCoordinates(locationLat, locationLong).then();
        }else{
            console.log("eroare");
        }
    };

    getWeatherForGivenCoordinates = async (locationLat, locationLong) =>{

        let weatherData = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${locationLat}&lon=${locationLong}&units=metric&appid=b35a515c553dadf34292da5798253cbf`)
            .then(result => {
                return result["data"];
            })
            .catch(err => {
                console.log(err);
            });
        this.setState({weather: weatherData});

        this.setState({infoLoaded: true});
        this.setState({infoRequested: false});
    };


    showPosition = (position) => {
        this.getWeatherForGivenCoordinates(position.coords.latitude, position.coords.longitude).then();
    }

    getUserLocation = () =>{

        if (navigator.geolocation) {
            this.setState({infoLoaded: false});
            this.setState({infoRequested: true});

            navigator.geolocation.getCurrentPosition(this.showPosition);
        } else {
            console.log("nu e ok")
        }
    }


      render() {
          return (
                  <main className="appContainer">
                      <div className="appBackground">

                      </div>
                      <div className="appContent">
                          <UserInputForm searchForCity={this.searchForCity} getUserLocation={this.getUserLocation}/>

                          { this.state.infoLoaded
                              ?   (
                                  <div className="meteoResults">
                                      <CityName cityName={this.state.locationName}/>
                                      <Forecast weather={this.state.weather}/>
                                  </div>
                              )
                              :
                              ( this.state.infoRequested
                                      ? <LoadingSpinner/>
                                      :
                                      <p>Search for a city</p>
                              )
                          }

                      </div>
                  </main>
          );
      }
}

export default App;
