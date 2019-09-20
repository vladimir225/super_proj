import React, {Component} from 'react';
//import Store from './Redux';
import { createStore } from './ReduxFn';


const initialState = { count: 0 };

function reducer(state = { count: 0 }, action) {
    switch (action.type) {
        case 'INCREMENT' : return { count: state.count + action.amount };
        case 'DECREMENT' : return { count: state.count - action.amount };
        case 'RESET' : return { count: 0 };
        default: return state;
    }
}

function increment(amount) {
    return { type: 'INCREMENT', amount };
}

function decrement(amount) {
    return { type: 'DECREMENT', amount };
}

function reset(amount) {
    return { type: 'RESET' };
}

const store = createStore(reducer, initialState);

class Counter extends Component {
    
    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
    }

    increment = () =>  {
        let amount = parseInt(this.refs.amount.value || 1)
        store.dispatch(increment(amount))
    }

    decrement = () => {
        let amount = parseInt(this.refs.amount.value || 1)
        store.dispatch(decrement(amount))
    }

    reset = () => {
        store.dispatch(reset())
    }

    render() {
        const count = store.getState().count;
        return (
            <div className='counter' >
                <span className='count'>{count}</span>

                <div>
                    <button onClick={this.decrement}>-</button>
                    <button onClick={this.reset}>R</button>
                    <button onClick={this.increment}>+</button>
                </div>
                
                <input type='text' ref='amount' defaultValue='1'></input>
            </div>
        )
    }
}

export default Counter;