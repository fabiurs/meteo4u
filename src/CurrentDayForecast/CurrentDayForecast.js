import React from "react";

class CurrentDayForecast extends React.Component{
    render() {
        return (
            <div>
                <p>This is CurrentDayForecast</p>
                <p>{this.props.content}</p>
            </div>
        );
    }
}

export default CurrentDayForecast;
