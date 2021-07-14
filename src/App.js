import React from "react"
import Button from "./Button"

const App = () => {
    return(
        <div>
            <h2>Losshika asks you something!</h2>
            <p>Which is your favourite programming language?</p>
            <div id="options">
                <div className="div">
                    <Button actualText="C++"/>
                    <Button actualText="Java"/>
                </div>
                <div className="div">
                    <Button actualText="Python"/>
                    <Button actualText="Javascript"/>
                </div>
            </div>
        </div>
    )
}

export default App