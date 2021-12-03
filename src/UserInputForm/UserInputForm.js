import FadeIn from 'react-fade-in';
import React from "react";

class UserInputForm extends React.Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    handleInputCity = (e) => {
        if(e.which === 13) {
            if(e.target.value.length > 0)
                this.props.searchForCity(e.target.value);
        }
    }

    handleInputCityButton = () => {
        let userInput = this.refs.myRef.value;
        if(userInput.length > 0){
            this.props.searchForCity(userInput);
        }
    }

    render(){
        return (
            <div className="userInputForm">
                <div className="topInputForm">
                    <FadeIn className="topInputFormFix" delay={500}>
                        <input
                            ref="myRef"
                            type="text"
                            placeholder="Search for a city"
                            onKeyPress={this.handleInputCity}
                        />

                        <i className="fas fa-map-marker-alt"
                           onClick={this.props.getUserLocation}></i>
                    </FadeIn>
                </div>

                <FadeIn delay={1500}>
                    <button type="submit"
                            onClick={this.handleInputCityButton}>Search</button>
                </FadeIn>
            </div>
        );
    }
}

export default UserInputForm;
