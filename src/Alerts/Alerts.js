import React from "react";
import FadeIn from 'react-fade-in';
import Alert from "./Alert";
class Alerts extends React.Component{


    render() {
        let alertsArray = <Alert />;
        if(this.props.alerts !== undefined){
            alertsArray = this.props.alerts.map((alert, index) =>
                <Alert
                    key={index}
                    oneAlert={alert}
                />
            );
        }

        return (
           <FadeIn className='alerts-container'>
               {
                   this.props.alerts !== undefined
                    ? <p className="alerts-title">Alerts</p>
                       : <></>
               }
               {alertsArray}
           </FadeIn>
        );
    }
}

export default Alerts;
