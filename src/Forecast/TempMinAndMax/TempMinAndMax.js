import React from "react";

class TempMinAndMax extends React.Component{

    render() {
        return (
            <>
                <span className="tempMin">Min: {this.props.temp["min"].toFixed(1)} &#8451;</span>
                <span className="tempMax">Max: {this.props.temp["max"].toFixed(1)} &#8451;</span>
            </>
        );
    }
}

export default TempMinAndMax;
