import React, { Component } from 'react'

import './footer.less'

class Footer extends Component {
  render() {
    return (
      <div className="footer-wrapp">
        <footer>
          <ul>
            <li className="title">Code</li>
            <li>
              <a href="https://github.com" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://juejin.im/" target="_blank">
                juejin.im
              </a>
            </li>
          </ul>
          <ul>
            <li className="title">Photos</li>
            <li>
              <a href="https://www.douyin.com/" target="_blank">
                Douyin
              </a>
            </li>
          </ul>
          <ul>
            <li className="title">Contact</li>
            <li>
              <a href="https://mail.qq.com/" target="_blank">
                971416434@qq.com
              </a>
            </li>
          </ul>
        </footer>
      </div>
    )
  }
}

export default Footer
