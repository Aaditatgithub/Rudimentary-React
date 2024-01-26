import './Counter.css'
import { useState } from 'react';
import {PropTypes} from 'prop-types'

export default function Counter(){
    return (
        <>
        <span className="count">{count}</span>
        <CounterDef by={1}></CounterDef>
        <CounterDef by={2}></CounterDef>
        <CounterDef by={3}></CounterDef>
        </>
    );
}

function CounterDef({by}){

    const [count, setCount] = useState(0);

    function incrementCounter(){
        setCount(count + by)  
        console.log('increment clicked')
    }

    function decrementCounter(){
        setCount(count - by)  
        console.log('decrement clicked')
    }

    return (
        <div>
        <div className="Counter">Counter</div>
            
            <div> 
                <button className="counterButton" 
                        onClick={incrementCounter}
                        >+{by}
                </button>

                <button className="counterButton" 
                        onClick={decrementCounter}
                        >-{by}
                </button>
            </div>
        </div>
    );
}

Counter.propTypes = {
    by: PropTypes.number
}

Counter.defaultProps = {
    by: 5
}