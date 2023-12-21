import React from 'react';
import Navbar from '../Navbar/Navbar';
import Card1 from '../Card/Card1';
import Card2 from '../Card/Card2';


export default function Events() {
  return (
      <><Navbar></Navbar><center><h1>Events</h1></center><br></br><div className='tit1'>
      <Card1 />
      <br></br>
    </div><div className='tit1'>
        <Card2 />
        <br></br>
      </div></>
  )
}
