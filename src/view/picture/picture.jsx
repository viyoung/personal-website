import React, { Component } from 'react'

import './picture.less'

class Picture extends Component {
  constructor() {
    super()
    this.state = {
      pictureList: [
        { path: require('./../../assert/image/IMG_0053.jpeg') },
        {
          path: require('./../../assert/image/IMG_1133.jpeg')
        },
        {
          path: require('./../../assert/image/IMG_1833.jpeg')
        },
        {
          path: require('./../../assert/image/IMG_2437.jpeg')
        },
        {
          path: require('./../../assert/image/IMG_0385.jpeg')
        },
        {
          path: require('./../../assert/image/IMG_2613.jpeg')
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
