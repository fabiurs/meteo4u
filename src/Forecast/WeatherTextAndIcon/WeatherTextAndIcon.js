import React from "react";

class WeatherTextAndIcon extends React.Component{

    render() {

        let weatherIcon = "http://openweathermap.org/img/wn/" + this.props.info["icon"] + "@2x.png";

        return (
            <div className="iconAndTextContainer">
                <p>{this.props.info["main"]}</p>
                <img src={weatherIcon} alt="weather-icon"/>

            </div>
        );
    }
}

export default WeatherTextAndIcon;
