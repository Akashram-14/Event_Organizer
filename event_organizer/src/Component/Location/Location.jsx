import React from 'react';
import Local1 from '../Local/Local1';
import Local2 from '../Local/Local2';
import Navbar from '../Navbar/Navbar';


export default function Location() {
  return (
    <div>
        <Navbar/>
        <br></br>
        <div>
      <Local1></Local1>
      </div>
        <div>
      <Local2></Local2>
      </div>
      <br></br>
    </div>
  )
}
