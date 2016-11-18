import React from 'react'
import Clock from '../components/Clock'
import { Link } from 'react-router'
import FontAwesome from "react-fontawesome"

let AppLayout = props => (
    (
        <div className="site-wrapper">
      <div className="site-wrapper-inner">
        <div className="cover-container">
          <div className="masthead clearfix">
            <div className="inner">
              <h3 className="masthead-brand"><Link to="/">Jargan76<FontAwesome name='twitch' className="twitch" />Viewer</Link></h3>
              <nav>
                <ul className="nav masthead-nav">
                  <li className='whiteShadow'><Link to="/all">All</Link></li>
                  <li className='whiteShadow'><Link to="/online">Online</Link></li>
                  <li className='whiteShadow'><Link to="/offline">Offline</Link></li>
                  <li><Clock /></li>
                </ul>
              </nav>
            </div>
          </div>
          <main>
                {props.children}
          </main>
          <div className="mastfoot">
            <div className="inner">
              <p>This viewer was made for and by: <a href="http://">Jargan76</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
)

export default AppLayout