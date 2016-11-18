import React from'react'
import Channels from './Channel'
const players = [ "OgamingSC2", "quickybaby", "cretetion", "freecodecamp", "dantdm", "dantdm_thedimondminecart" ]

export default class All extends React.Component {
    render() {
        return(
                <div>
                    <div className="inner cover">
                        <h1 className="cover-heading">This is everyone</h1>
                        <p className="lead">All Channels Online and Offline.</p>
                        <ul className="lead">
                           {players.map(function(i) {
                                return <Channels name={ i } key={ i }/>
                           })}
                        </ul>
                    </div>
                </div>
            )
    }
}