import React from "react";
import Day from "./Day/Day";

import FadeIn from 'react-fade-in';

class NextDaysForecast extends React.Component{

    render() {

        let days = this.props.weather.map((dailyWeather, index) =>
            <Day
                key={index}
                weather={dailyWeather}/>
        );

        days.shift();

        return (
            <FadeIn delay={900}>
                <p className="nextDaysWeatherTitle">Weather for the next 7 days</p>
                <div className="container7DaysForecast">
                    {days}
                </div>
            </FadeIn>
        );
    }
}

export default NextDaysForecast;
