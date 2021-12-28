import React from "react";
import FadeIn from 'react-fade-in';
import Alert from "./Alert";
class Alerts extends React.Component{


    render() {
        let alertsArray = undefined;
        if(this.props.alerts !== undefined){
            let alertsArray = this.props.alerts.map((alert, index) =>
                <Alert
                    key={index}
                    oneAlert={alert}
                />
            );
        }
        return (
           <FadeIn>
               {
                   this.props.alerts !== undefined
                       ?    {alertsArray}
                       :    <></>
               }

           </FadeIn>
        );
    }
}

export default Alerts;
