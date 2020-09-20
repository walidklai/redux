import React from 'react'
import {connect} from 'react-redux'

const Counter = (props) => {
    const increment = () => {
        props.dispatch({ type: "INCREMENT" });
      };
     
      const decrement = () => {
        props.dispatch({ type: "DECREMENT" });
      };
      const reset=()=>{
          props.dispatch({type:"RESET"})
      }
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'lightgrey',

        }}>
            <div className='counter'>
                <button 
                className='buttons'
                onClick={()=>decrement()}
                >|</button>
                <h1>{props.counter}</h1>
                <button 
                className='buttons'
                onClick={()=>increment()}
                >+</button>
            </div>
            <button style={{
                alignSelf: 'center',
                marginTop: '40px',
                paddingBottom:'20px',
                border: 'none',
                backgroundColor: 'unset'
            }} 
            onClick={()=>reset()}
            >Reset</button>
        </div>
    )
}
const mapStateTopProps=state=>{
    return {
        counter:state
    }
}

export default connect(mapStateTopProps)(Counter)
