import React from "react";

class UserInputForm extends React.Component{
    constructor(props) {
        super(props);
     }
    render(){
        return (
            <div>
                <form>
                    <label>
                        <input
                            type="text"
                        />
                    </label>
                </form>
            </div>
        );
    }
}

export default UserInputForm;
