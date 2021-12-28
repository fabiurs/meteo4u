import React from "react";
import FadeIn from 'react-fade-in';
import timeConvertDayAndMonthAndHour from "../others/convertUnixTime2";
class Alert extends React.Component{

    render() {
        console.log(this.props.oneAlert);

        return (
            <FadeIn className="alerts-box">
                <p>{this.props.oneAlert["sender_name"]}</p>
                <p>{this.props.oneAlert["event"]}</p>
                <p className={"duration"}>From {timeConvertDayAndMonthAndHour(this.props.oneAlert["start"])} until {timeConvertDayAndMonthAndHour(this.props.oneAlert["end"])}</p>
                <p>{this.props.oneAlert["description"]}</p>
            </FadeIn>
        );
    }
}

export default Alert;
