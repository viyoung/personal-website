import React, { Component } from 'react'

import './me.less'

class Me extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div className="me-wrapp">
        <div className="log-icon">
          <span className="block1"></span>
          <span className="block2"></span>
          <span className="block3"></span>
          <span className="block4"></span>
        </div>
        <div className="name">VI Young</div>
        <div className="text">DETAIL</div>
      </div>
    )
  }
}

export default Me
