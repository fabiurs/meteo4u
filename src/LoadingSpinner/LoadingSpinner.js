import React from "react";

class LoadingSpinner extends React.Component{

    render() {
        return (
            <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        );
    }
}

export default LoadingSpinner;
