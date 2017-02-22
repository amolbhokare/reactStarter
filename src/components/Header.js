import React from 'react'
import NavLink from './NavLink';
import logo from '../assets/img/logo.png';

export default React.createClass({
  render() {
    return (
      <header className="header">
        <NavLink to="/" onlyActiveOnIndex className="logo-link">
          <img src={logo} className="full-logo" alt="logo" />
        </NavLink>
        <ul>
          <li><NavLink className="" to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink className="" to="about">About</NavLink></li>
        </ul>
      </header>
    )
  }
})
