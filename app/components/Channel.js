import React from 'react'
import getChannel from './xhr'
import FontAwesome from 'react-fontawesome'
import { Link } from 'react-router'

  class Channels extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
         online : [],
         name : null,
         game : null,
         viewers : null,
         id : null,
         url : null,
         status : "offline"
      }
    }
    componentDidMount() {
      getChannel(this.props.name).then(response => {
            if (response.data.stream !== null) {
               this.setState({
                  online : response.data.stream,
                  name : response.data.stream.channel.name,
                  game : response.data.stream.game,
                  viewers : response.data.stream.viewers,
                  id : response.data.stream.id,
                  url : response.data.stream.channel.url,
                  status : "online"
                 })
            }
      })
    }
    render() {
      if(this.state.status === "online"){
        return(
          <li className="online">
              <a href={this.state.url} target="_blank" className="btn btn-lg btn-default">
                  <span className="playerName">{this.state.name}</span> is playing {this.state.game} <br />
                   join the already {this.state.viewers} people watching now!<br />
                         <FontAwesome name='television' />
              </a>
          </li>
        )
      }else{
        return(
            <li className="offline">
              <Link to="/end" className="btn btn-lg btn-default"><FontAwesome name='frown-o' /> <span className="playerName">{this.props.name}</span> <br />  <FontAwesome name='exclamation-circle' />OFFLINE</Link>
            </li>
          )
      }
    }
  }


export default Channels