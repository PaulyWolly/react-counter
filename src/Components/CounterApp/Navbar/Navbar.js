/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './../../../../node_modules/bootstrap/dist/css/bootstrap.css'
import './Navbar.css'
import { useState } from 'react'


export default function Navbar(props) {

  const [count, setCount] = useState(0);
  const [tags, setTags] = useState(
    [
    "tag1",
    "tag2",
    "tag3"
    ]
  );


const formatCount = () => {
  return setCount(count+1)
}

let classes = "badge m-2 bg-";

if ( count === 0 ) {
  classes = classes + "warning"
}
if ( count > 0 && count < 5 ) {
  classes = classes + "success";
}
if ( count >= 5  ) {
  classes = classes + "danger";
}

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">React counter</a>
        <div
          className="badge rounded-pill bg-secondary">
          { props.totalCounters }
        </div>
      </nav>
    </div>
  )
}
