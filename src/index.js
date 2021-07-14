import React from "react"
import ReactDOM from "react-dom"
import GreetAll from "./GreetAll"
import App from "./App"
import "./style.css"

ReactDOM.render(<GreetAll/>,document.getElementById("header"))
ReactDOM.render(<App/>,document.getElementById("question"))