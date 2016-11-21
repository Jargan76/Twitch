import React from'react'
import FontAwesome from 'react-fontawesome'
import Channels from './Channel'
const players = [ "OgamingSC2", "quickybaby", "cretetion", "freecodecamp", "dantdm", "dantdm_thedimondminecart" ]

export default class Online extends React.Component {

    render() {
        return(
                <div>
                    <div className="inner cover">
                        <h1 className="cover-heading">Online Now</h1>
                        <p className="lead">These are the channels online now and what thay are playing. Click the channel to start watching.</p>
                        <ul className="lead">
                           {players.map(function(i) {
                                return <Channels name={ i } key={ i }/>
                           })}
                        </ul>
                    </div>
                    <style>{"\
                        .offline {\
                           display : none;\
                        }\
                    "}</style>
                </div>
            )
    }
}