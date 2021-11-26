import React from "react";

class Temperature extends React.Component{

    render() {

        return (
            <>
                <div>
                    Temp: {this.props.temp}
                </div>
                <div>
                    Feels Like: {this.props.feelsLike}
                </div>
                <br/>
            </>
        );
    }
}

export default Temperature;
