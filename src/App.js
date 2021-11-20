import './App.css';
import UserInputForm from "./UserInputForm/UserInputForm";
import CurrentDayForecast from "./CurrentDayForecast/CurrentDayForecast";
import NextDaysForecast from "./NextDaysForecast/NextDaysForecast";
import {useState} from "react";

const api = {
    key: "b35a515c553dadf34292da5798253cbf",
    base: "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}"
}

function App() {

    const [weather, setWeather] = useState({});

  return (
    <div className="App">
      <main className="appContainer">
          <UserInputForm/>
          <CurrentDayForecast/>
          <NextDaysForecast/>
      </main>
    </div>
  );
}

export default App;
