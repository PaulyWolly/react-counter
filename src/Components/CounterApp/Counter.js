/* eslint-disable no-duplicate-case */
/* eslint-disable no-unused-vars */
/* eslint-disable no-const-assign */

import React from 'react';
import './Counter.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import minusIcon from '../../removeWhite24.svg'


export default function Counter(props) {

  const [value, setValue] = useState(props.counter.value);
  const [tags, setTags] = useState(
    [
    "tag1",
    "tag2",
    "tag3"
    ]
  );


  // const handleIncrement = () => {
  //   return setValue(value+1)
  // }

  const handleDecrement = () => {
    return setValue(value-1)
  }

  const formatCount = () => {
    const { value } = props.counter
    return value === 0 ? 'Zero' : value;
  }

  const getBadgeColor = () => {
    const { value } = props.counter
     let classes = "badge m-2 bg-";

    if ( value === 0 ) {
      classes = classes + "warning"
    }
    if ( value > 0 && value < 5 ) {
      classes = classes + "success m-2 pad-right";
    }
    if ( value >= 5  ) {
      classes = classes + "danger m-2 pad-right";
    }
    return classes;

  }

  return (

    <div className='counter-app'>
      <div className="row">
        <div className="container col-lg-12">
          <div className={ getBadgeColor() }>&nbsp; { formatCount() }&nbsp; </div>&nbsp;&nbsp;&nbsp;&nbsp;
          <div className='btn-grouping'>
              <button
                className='plus btn-small btn-secondary pr-2'
                onClick={ () => props.onIncrement(props.counter) }>
                  <span className="iconify plusIcon" data-icon="bi:plus-lg"></span>
              </button>&nbsp;&nbsp;
              <button
                className='minus btn-small btn-secondary pr-2'
                onClick={ () => props.onDecrement(props.counter) }>
                  <img className='minusIcon' src={minusIcon} alt="remove" />
              </button>&nbsp;&nbsp;
              <button
                className='delete btn-small btn-danger pr-2'
                onClick={ () => props.onDelete(props.counter.id) }>Delete
              </button>
          </div>
          {/* <ul className='ul-style'>
            { tags ? tags.map(tag => <li key={tag}>{ tag }</li>) : <li>No tags found</li> }
            </ul>
          */}
        </div>
      </div>
    </div>
  )
}

