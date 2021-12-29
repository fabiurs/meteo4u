import React from "react";
import FadeIn from 'react-fade-in';
import timeConvertDayAndMonthAndHour from "../others/convertUnixTime2";
class Alert extends React.Component{

    render() {
        return (
          <>
                {
                    this.props.oneAlert !== undefined
                    ?   <div className="alerts-box">
                            <p className="sender-name">{this.props.oneAlert["sender_name"]}</p>
                            <p className="event-name">{this.props.oneAlert["event"]}</p>
                            <p className="duration">From {timeConvertDayAndMonthAndHour(this.props.oneAlert["start"])} until {timeConvertDayAndMonthAndHour(this.props.oneAlert["end"])}</p>
                            <p className="event-description">{this.props.oneAlert["description"]}</p>
                        </div>
                    : <></>
                }
          </>
        );
    }
}

export default Alert;
