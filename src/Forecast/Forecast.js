import React from "react";
import CurrentDayForecast from "./CurrentDayForecast/CurrentDayForecast";
import NextDaysForecast from "./NextDaysForecast/NextDaysForecast";

class Forecast extends React.Component{

    render() {
        return (
            <>
                <CurrentDayForecast weather={this.props.weather["current"]}/>
                <NextDaysForecast weather={this.props.weather["daily"]}/>
            </>
        );
    }
}

export default Forecast;
