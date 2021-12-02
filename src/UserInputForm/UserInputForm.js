function UserInputForm(props){
    const handleInputCity = (e) => {
        if(e.which === 13) {
            if(e.target.value.length > 0)
                props.searchForCity(e.target.value);
        }
    }

    const handleInputCityButton = () => {

    }

    return (
        <div className="userInputForm">
            <div className="topInputForm">
                <input
                    type="text"
                    placeholder="Search for a city"
                    onKeyPress={handleInputCity}
                />

                <i className="fas fa-map-marker-alt"
                   onClick={props.getUserLocation}></i>
            </div>
            <button type="submit"
                    onClick={handleInputCityButton}>Search</button>
        </div>
    );
}

export default UserInputForm;
