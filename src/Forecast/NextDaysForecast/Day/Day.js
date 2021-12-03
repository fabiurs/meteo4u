import React from "react";
import WeatherTextAndIcon from "../../WeatherTextAndIcon/WeatherTextAndIcon";
import TempMinAndMax from "../../TempMinAndMax/TempMinAndMax";
import timeConvertDayAndMonth from "../../../others/convertUnixTime";



class Day extends React.Component{

    render() {
        return (
            <div className="containerDay">
                <span className="dayDate"> {timeConvertDayAndMonth(this.props.weather["dt"])} </span>
                <WeatherTextAndIcon
                    info={this.props.weather["weather"][0]}
                />
                <TempMinAndMax
                    temp={this.props.weather["temp"]}
                />
            </div>
        );
    }
}

export default Day;
