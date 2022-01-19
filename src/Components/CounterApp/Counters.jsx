/* eslint-disable no-use-before-define */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './Counters.css';
import { useState } from 'react';

import CountersClass from './CountersClass'

export default function Counters(props) {

  let [counters, setCounters] = useState('')
  let [counter, setCounter] = useState('')

  counters = [
    { counter: 1, id: 1, value: 1 },
    { counter: 2, id: 2, value: 2 },
    { counter: 3, id: 3, value: 3 },
    { counter: 4, id: 4, value: 4 },
    { counter: 5, id: 5, value: 5 },
    { counter: 6, id: 6, value: 6 },
  ]

  const resetCount = (e) => {
    console.log('reset clicked')
    { counters.map(counter => <CountersClass key={counter.id} value={props.value} /> )}
  }

  const handleDelete = (counterId) => {
    //console.log('Event Handler Called', counterId)
    const counterManaged = counters.filter(c => c.id !== counterId)
    console.log(counterManaged)
  }

  return (
    <div>
      <div className='reset-btn'>
        <button className='reset-btn btn-sm btn-primary' onClick={resetCount}>Reset</button>
      </div>
      <div>
        { counters.map(counter =>
          <CountersClass key={counter.id}
            value={counter.value}
            selected={true}
            onDelete={handleDelete}
            id={counter.id}
          />) }
      </div>

    </div>
  )
}
