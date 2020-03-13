import React, { Component } from 'react'

import './picture.less'

class Picture extends Component {
  constructor() {
    super()
    this.state = {
      pictureList: [
        {
          path: require('./../../assert/image/IMG_0053.jpeg'),
          linkPath: '/hometown'
        },
        {
          path: require('./../../assert/image/IMG_1133.jpeg'),
          linkPath: '/flower'
        },
        {
          path: require('./../../assert/image/IMG_1833.jpeg'),
          linkPath: '/sky'
        },
        {
          path: require('./../../assert/image/IMG_2437.jpeg'),
          linkPath: '/mountain'
        },
        {
          path: require('./../../assert/image/IMG_0385.jpeg'),
          linkPath: '/city'
        },
        {
          path: require('./../../assert/image/IMG_2613.jpeg'),
          linkPath: '/sun'
        }
      ]
    }
  }
  render() {
    const picture = this.state.pictureList.map(item => (
      <div
        className="picture"
        key={item.path}
        style={{ backgroundImage: `url(${item.path})` }}
      ></div>
    ))
    return <div className="picture-wrapp">{picture}</div>
  }
}

export default Picture
