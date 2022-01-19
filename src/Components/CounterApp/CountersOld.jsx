/* eslint-disable no-unused-vars */

import React from 'react';
import './Counters.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import minusIcon from '../../removeWhite24.svg'


export default function CounterApp() {

  const tagArray = [
    "tag1",
    "tag2",
    "tag3"
  ]

  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0)
  const [tags, setTags] = useState(tagArray);


  const handleReset = () => {
    setCountOne(0)
    setCountTwo(0)
  }


  const handleDelete = (e) => {

    return setCountOne(countOne-1)
  }

  const handleDelete2 = () => {
    return setCountTwo(countTwo-1)
  }



  let classes1 = "badge m-2 bg-";

  if ( countOne === 0 ) {
    classes1 = classes1 + "warning"
  }
  if ( countOne > 0 && countOne < 5 ) {
    classes1 = classes1 + "success";
  }
  if ( countOne >= 5  ) {
    classes1 = classes1 + "danger";
  }

  let classes2 = "badge m-2 bg-";

  if ( countTwo === 0 ) {
    classes2 = classes2 + "warning"
  }
  if ( countTwo > 0 && countTwo < 5 ) {
    classes2 = classes2 + "success";
  }
  if ( countTwo >= 5  ) {
    classes2 = classes2 + "danger";
  }

  return (
    <div className='counters-container'>
      <button className='btn-small btn-warning' onClick={handleReset}>Reset</button>
      <div className="counters">
        <div className='counter1-app'>
          <div className={ classes1 }>&nbsp; { countOne }&nbsp; </div>&nbsp;&nbsp;&nbsp;&nbsp;
          <button className='plus btn-small btn-primary pr-3' onClick={() => { return setCountOne(countOne+1)}}><span className="iconify plusIcon" data-icon="bi:plus-lg"></span></button>&nbsp;&nbsp;
          <button className='minus btn-small btn-primary' onClick={() => { return setCountOne(countOne-1)}}><img className='minusIcon' src={minusIcon} alt="remove" /></button>&nbsp;&nbsp;
          <button className='btn-small btn-danger' onClick={handleDelete}>Delete</button>
          {/* <ul className='ul-style'>
            { tags ? tags.map(tag => <li key={tag}>{ tag }</li>) : <li>No tags found</li> }
          </ul> */}
        </div>
        <div className='counter2-app'>
          <div className={ classes2 }>&nbsp; { countTwo }&nbsp; </div>&nbsp;&nbsp;&nbsp;&nbsp;
          <button className='plus btn-small btn-primary pr-3' onClick={() => { return setCountTwo(countTwo+1)}}><span className="iconify plusIcon" data-icon="bi:plus-lg"></span></button>&nbsp;&nbsp;
          <button className='minus btn-small btn-primary' onClick={() => { return setCountTwo(countTwo-1)}}><img className='minusIcon' src={minusIcon} alt="remove" /></button>&nbsp;&nbsp;
          <button className='btn-small btn-danger' onClick={handleDelete2}>Delete</button>
          {/* <ul className='ul-style'>
            { tags ? tags.map(tag => <li key={tag}>{ tag }</li>) : <li>No tags found</li> }
          </ul> */}
        </div>
      </div>
    </div>
  )
}


