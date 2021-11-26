import React from "react";
import Day from "./Day/Day";

class NextDaysForecast extends React.Component{

    render() {

        let days = this.props.weather.map((dailyWeather) =>
            <Day weather={dailyWeather}/>
        );

        return (
            <div>
                {days}
            </div>
        );
    }
}

export default NextDaysForecast;
