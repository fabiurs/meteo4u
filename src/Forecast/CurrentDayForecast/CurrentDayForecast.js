import React from "react";

class CurrentDayForecast extends React.Component{

    render() {

        let weatherIcon = "http://openweathermap.org/img/wn/" + this.props.weather["weather"][0]["icon"] + "@2x.png";

        return (
            <div>
                <p>Current Day Forecast</p>
                <img src={weatherIcon} alt="weather-icon"/>
            </div>
        );
    }
}

export default CurrentDayForecast;
