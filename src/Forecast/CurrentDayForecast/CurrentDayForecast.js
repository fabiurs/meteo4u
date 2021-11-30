import React from "react";
import Temperature from "../Temperature/Temperature";
import WeatherTextAndIcon from "../WeatherTextAndIcon/WeatherTextAndIcon";

class CurrentDayForecast extends React.Component{

    render() {
        return (
            <div className="currentDayForecast">
                <WeatherTextAndIcon
                    info={this.props.weather["weather"][0]}
                />
                <div className="containerData">
                    <Temperature
                        temp={this.props.weather["temp"]}
                        feelsLike={this.props.weather["feels_like"]}
                    />
                    <span className="windText">Wind Speed: {this.props.weather["wind_speed"]} m/s</span>
                </div>
            </div>
        );
    }
}

export default CurrentDayForecast;
