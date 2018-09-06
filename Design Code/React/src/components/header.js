import React from 'react'
import Link from 'gatsby-link'
import './header.css'
const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img src={require('../images/logo-designcode.svg')} alt="logo" width="30" /></Link>
      <Link to="/course">Courses</Link>
      <Link to="/downloads">Downloads</Link>
      <Link to="/workshops">workshops</Link>
      <Link to="/buy"><button>Buy</button></Link>
    </div>
  </div>
)

export default Header
