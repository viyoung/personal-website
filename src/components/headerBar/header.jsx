import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './headerbar.less'

class Header extends Component {
  constructor() {
    super()
    this.state = {
      routerList: [
        { path: '/', text: 'ME' },
        { path: '/picture', text: 'PICTURE' },
        { path: '/notesLink', text: 'NOTES LINK' }
      ]
    }
  }
  render() {
    const routerLink = this.state.routerList.map(item => (
      <NavLink
        key={item.path}
        to={item.path}
        activeClassName="active"
        exact={true}
        strict={true}
      >
        {item.text}
      </NavLink>
    ))
    return (
      <nav className="header-wrapp">
        <section>{routerLink}</section>
      </nav>
    )
  }
}

export default Header
