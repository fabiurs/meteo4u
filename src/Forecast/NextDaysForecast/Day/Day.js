import React from "react";

class Day extends React.Component{

    render() {
        return (
            <div>
                {this.props.weather["temp"]["day"]}
            </div>
        );
    }
}

export default Day;
