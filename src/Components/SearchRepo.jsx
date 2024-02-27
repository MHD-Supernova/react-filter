import './SearchRepo.css'
import React from 'react'

export default function () {
  return (
    <div className='main'>
        <input type='text' placeholder='Search repository...'/>
        <button className ='go-button' >Go</button>
    </div>
  )
}
