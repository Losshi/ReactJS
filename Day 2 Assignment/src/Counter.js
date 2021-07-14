import React,{useState} from "react"

const Counter = () => {
    let [counter,setCounter] = useState(5)
    return(
        <div>
            <h2>Value of the Counter = <span id="value">{counter}</span></h2>
            <div class="buttons">
                <button onClick={()=>(counter<25)?setCounter(counter+1):""}>Increment by 1</button>
                <button onClick={()=>(counter<24)?setCounter(counter+2):""}>Increment by 2</button>
            </div>
            <div class="buttons">
                <button onClick={()=>(counter>0)?setCounter(counter-1):""}>Decrement by 1</button>
                <button onClick={()=>(counter>1)?setCounter(counter-2):""}>Decrement by 2</button>
            </div>
            <div class="buttons">
                <button onClick={()=>{setCounter(0)}}>Reset to 0</button>
                <button onClick={()=>{setCounter(25)}}>Reset to 25</button>
            </div> 
        </div>
    )
}

export default Counter

/* */