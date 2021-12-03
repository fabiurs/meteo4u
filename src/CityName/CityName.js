import React from "react";
import FadeIn from 'react-fade-in';

class CityName extends React.Component{
    render() {
        return (
            <FadeIn>
                <div className="cityNameContainer">
                    <p>{this.props.cityName}</p>
                </div>
            </FadeIn>
        );
    }
}

export default CityName;
