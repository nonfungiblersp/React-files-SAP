import React,{useState} from "react";
import './App.css';
function CounterApp(){
    const [count, setCount]=useState(0);
    const increment = () => {
        setCount(count+1);
    }

    const decrement = () => {
        setCount(count-1);
    }

    return (
        <div className="container">
            <h1 className="counter">{count}</h1>
            <div className="button-container">
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
        </div>
    )
}

export default CounterApp;