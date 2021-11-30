import React from "react";

class CityName extends React.Component{
    render() {
        return (
            <div className="cityNameContainer">
                <p>{this.props.cityName}</p>
            </div>
        );
    }
}

export default CityName;
