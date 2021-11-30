function UserInputForm(props){
    const handleInputCity = (e) => {
        if(e.which === 13) {
            if(e.target.value.length > 0)
                props.searchForCity(e.target.value);
        }
    }

    return (
        <div className="userInputForm">
            <div className="topInputForm">
                <input
                    type="text"
                    placeholder="Enter text here"
                    onKeyPress={handleInputCity}
                />
                <img src="../photos/location.png"
                     alt="location"
                    onClick={props.getUserLocation}
                />
            </div>
            <button type="submit">Search</button>
        </div>
    );
}

export default UserInputForm;
