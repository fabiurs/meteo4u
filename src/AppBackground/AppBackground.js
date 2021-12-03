import React from "react";
import img01d from '../photos/img01d.jpg'
import img01n from '../photos/img01n.jpg'

import img02d from '../photos/img02d.jpg'
import img02n from '../photos/img02n.jpg'

import img09d from '../photos/img09d.jpg'
import img09n from '../photos/img09n.jpg'

import img11d from '../photos/img11d.jpg'
import img11n from '../photos/img11n.jpg'

import img13d from '../photos/img13d.jpg'
import img13n from '../photos/img13n.jpg'

import img50d from '../photos/img50d.jpg'
import img50n from '../photos/img50n.jpg'



class AppBackground extends React.Component{

    render() {
/*
        01d.png 	01n.png 	clear sky
        02d.png 	02n.png     clouds
        03d.png 	03n.png 	clouds
        04d.png 	04n.png 	clouds
        09d.png 	09n.png 	rain
        10d.png 	10n.png 	rain
        11d.png 	11n.png 	thunderstorm
        13d.png 	13n.png 	snow
        50d.png 	50n.png 	mist
*/


        return (
            <div className="appBackground">

                {   this.props.iconCode === "01d"
                    ?   <img src={img01d} alt="background"/>
                    : <></>
                }
                {   this.props.iconCode === "01n"
                    ?   <img src={img01n} alt="background"/>
                    : <></>
                }
                {   this.props.iconCode === "02d" || this.props.iconCode === "03d" || this.props.iconCode === "04d"
                    ?   <img src={img02d} alt="background"/>
                    : <></>
                }
                {   this.props.iconCode === "02n" || this.props.iconCode === "03n" || this.props.iconCode === "04n"
                    ?   <img src={img02n} alt="background"/>
                    : <></>
                }
                {   this.props.iconCode === "09d" || this.props.iconCode === "10d"
                    ?   <img src={img09d} alt="background"/>
                    : <></>
                }
                {   this.props.iconCode === "09n" || this.props.iconCode === "10n"
                    ?   <img src={img09n} alt="background"/>
                    : <></>
                }
                {   this.props.iconCode === "11d"
                    ?   <img src={img11d} alt="background"/>
                    : <></>
                }
                {   this.props.iconCode === "11d"
                    ?   <img src={img11n} alt="background"/>
                    : <></>
                }
                {   this.props.iconCode === "13d"
                    ?   <img src={img13d} alt="background"/>
                    : <></>
                }
                {   this.props.iconCode === "13n"
                    ?   <img src={img13n} alt="background"/>
                    : <></>
                }
                {   this.props.iconCode === "50d"
                    ?   <img src={img50d} alt="background"/>
                    : <></>
                }
                {   this.props.iconCode === "50n"
                    ?   <img src={img50n} alt="background"/>
                    : <></>
                }

            </div>

        );
    }
}

export default AppBackground;
