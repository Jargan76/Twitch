import React from 'react'
import { Link } from 'react-router'
import FontAwesome from 'react-fontawesome'

export default class End extends React.Component {
    render() {
        return(
                <div>
                    <div className="inner cover">
                        <h1 className="cover-heading"><FontAwesome name='exclamation' /> <FontAwesome name='exclamation' /> IT SAID OFFLINE <FontAwesome name='exclamation' /> <FontAwesome name='exclamation' /></h1>
                        <p className="lead"><FontAwesome name='frown-o' /> Really, you can't watch this channel it's offline.
                        </p>
                    </div>
                </div>
            )
    }
}