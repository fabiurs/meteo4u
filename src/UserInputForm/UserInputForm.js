function UserInputForm(props){
    const handleChange = (e) => {
        if(e.which === 13)
            props.handleInputValue(e.target.value);
    }

    return (
        <input
            type="text"
            placeholder="Enter text here"
            onKeyPress={handleChange}
        />
    );
}

export default UserInputForm;
