import React from'react'
import FontAwesome from 'react-fontawesome'
import { Link } from 'react-router'
import Channels from './Channel'
const players = [ "OgamingSC2", "quickybaby", "cretetion", "freecodecamp", "dantdm", "dantdm_thedimondminecart" ]

export default class Offline extends React.Component {
    render() {
        return(
                <div>
                    <div className="inner cover">
                        <h1 className="cover-heading">Offline Now</h1>
                        <p className="lead">Not sure why you want to see the offline channels, but here you go.</p>
                        <ul className="lead">
                             {players.map(function(i) {
                                return <Channels name={ i } key={ i }/>
                           })}
                        </ul>
                    </div>
                    <style>{"\
                        .online {\
                           display : none;\
                        }\
                    "}</style>
                </div>
            )
    }
}