import React from 'react'
import { Link } from 'react-router'
import FontAwesome from 'react-fontawesome'

export default class Cover extends React.Component {
    render() {
        return(
                <div>
                    <div className="inner cover">
                        <h1 className="cover-heading">Thank you.</h1>
                        <p className="lead">Thanks for checking out my little project. This is a collection of my favorite twitch channels. I put this together as a project on <a href="http://freecodecamp.com/" target="_blank"><span className="text-info">FreeCodeCamp</span></a><FontAwesome name='link' />
                        </p>
                        <p className="lead">
                            <Link to="/all" className="btn btn-lg btn-default">(<FontAwesome name='eye' /><FontAwesome name='eye' />)     =<FontAwesome name='hand-o-right' className="hand"/></Link>
                        </p>
                    </div>
                </div>
            )
    }
}