import React from "react";
import CurrentDayForecast from "./CurrentDayForecast/CurrentDayForecast";
import NextDaysForecast from "./NextDaysForecast/NextDaysForecast";
import Alerts from "../Alerts/Alerts";

class Forecast extends React.Component{

    render() {
        return (
            <>
                <CurrentDayForecast weather={this.props.weather["current"]}/>

                <Alerts alerts={this.props.alerts} />

                <NextDaysForecast weather={this.props.weather["daily"]}/>
            </>
        );
    }
}

export default Forecast;
