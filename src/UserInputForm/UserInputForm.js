function UserInputForm(props){
    const handleChange = (e) => {
        if(e.which === 13) {
            props.handleInputValue(e.target.value);
        }
    }

    return (
        <div className="userInputForm">
            <input
                type="text"
                placeholder="Enter text here"
                onKeyPress={handleChange}
            />
            <button type="submit">Search</button>
        </div>
    );
}

export default UserInputForm;
