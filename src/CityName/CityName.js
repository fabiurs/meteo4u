import React from "react";

class CityName extends React.Component{
    render() {
        return (
            <div>
                <p>{this.props.cityName}</p>
            </div>
        );
    }
}

export default CityName;
