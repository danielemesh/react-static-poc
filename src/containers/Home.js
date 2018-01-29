import React from 'react'
import { getSiteProps } from 'react-static'
//
import logoImg from '../logo.png'

export default getSiteProps(({title}) =>  {
  return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Welcome to {title}</h1>
        <img src={logoImg} alt="" />
      </div>
  )
})
