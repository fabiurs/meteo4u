import React from "react";
import Day from "./Day/Day";

class NextDaysForecast extends React.Component{

    render() {

        let days = this.props.weather.map((dailyWeather, index) =>
            <Day
                key={index}
                weather={dailyWeather}/>
        );

        days.shift();

        return (
            <div className="container7DaysForecast">
                {days}
            </div>
        );
    }
}

export default NextDaysForecast;
