import React from "react";
import Temperature from "./Temperature/Temperature";
import WeatherTextAndIcon from "./WeatherTextAndIcon/WeatherTextAndIcon";

class CurrentDayForecast extends React.Component{

    render() {

    console.log(this.props.weather);
        return (
            <div>
                <WeatherTextAndIcon
                    info={this.props.weather["weather"][0]}
                />
                <Temperature
                temp={this.props.weather["temp"]}
                feelsLike={this.props.weather["feels_like"]}
                />
            </div>
        );
    }
}

export default CurrentDayForecast;
