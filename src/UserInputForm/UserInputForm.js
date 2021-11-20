function UserInputForm(props){
    const handleChange = (e) => {
        props.handleInputValue(e.target.value);
    }

    return (
        <input
            type="text"
            placeholder="Enter text here"
            onChange={handleChange}
        />
    );
}

export default UserInputForm;
