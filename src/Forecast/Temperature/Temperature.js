import React from "react";

class Temperature extends React.Component{

    render() {

        return (
            <>
                <span className="temperature">
                    Temp: {this.props.temp.toFixed(1)} &#8451;
                </span>
                <span className="feelsLike">
                    Feels Like: {this.props.feelsLike.toFixed(1)} &#8451;
                </span>
            </>
        );
    }
}

export default Temperature;
