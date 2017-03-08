import React from 'react'
import { Link } from 'react-router'

const Main = ( {children} ) => (
  <div>
    <h1>Main App</h1>
    <ul>
      <li><Link to='/home'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/planets'>Planets</Link></li>
      <li><Link to='/vehicles'>Vehicles</Link></li>
    </ul>
    {children}
  </div>
)

export default Main