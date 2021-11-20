import React from "react";
import './App.css';
import UserInputForm from "./UserInputForm/UserInputForm";
import CurrentDayForecast from "./CurrentDayForecast/CurrentDayForecast";
import NextDaysForecast from "./NextDaysForecast/NextDaysForecast";


const api = {
    key: "b35a515c553dadf34292da5798253cbf",
    base: "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}"
}

class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            weather: undefined,
            locationName: ''
        };
    }
    handleInputValue = (inputValue) => {
        console.log(inputValue)
        this.setState({ locationName: inputValue });
    }

  render() {
      return (
          <div className="App">
              <main className="appContainer">
                  <UserInputForm handleInputValue={this.handleInputValue} />
                  <CurrentDayForecast content={this.state.locationName}/>
                  <NextDaysForecast />
              </main>
          </div>
      );
  }
}

export default App;
