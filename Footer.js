import React from 'react'
import "./Header.css"

function Footer() {
  const date=new Date().getFullYear()
  return (
    <>
    <div className='footer'>
          <span>Date@{ date} </span>
    </div>
    </>
  )
}

export default Footer