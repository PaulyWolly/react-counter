/* eslint-disable no-use-before-define */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './Counters.css';
import { useState } from 'react';

import Counter from './Counter'

// export default function Counters(props) {

//   let [counters, setCounters] = useState('')
//   let [counter, setCounter] = useState('')

//   counters = [
//     { counter: 1, id: 1, value: 1 },
//     { counter: 2, id: 2, value: 2 },
//     { counter: 3, id: 3, value: 3 },
//     { counter: 4, id: 4, value: 4 },
//     { counter: 5, id: 5, value: 5 },
//     { counter: 6, id: 6, value: 6 },
//   ]

//   const resetCount = (e) => {
//     console.log('reset clicked')
//     { counters.map(counter => <Counter key={counter.id} value={props.value} /> )}
//   }

//   const handleDelete = (counterId) => {
//     //console.log('Event Handler Called', counterId)
//     const counterManaged = counters.filter(c => c.id !== counterId)
//     console.log(counterManaged)
//   }

class Counters extends Component {


  render() {
    return (
      <div>
        <div className='reset-btn'>
          <button className='reset-btn btn-sm btn-primary' onClick={this.props.onReset}>Reset</button>
        </div>
        <div>
          { this.props.counters.map(counter =>
            <Counter
              key={counter.id}
              counter={counter}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />) }
        </div>

      </div>
    );
  }
}

export default Counters;