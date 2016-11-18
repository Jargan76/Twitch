import React from 'react'
import FontAwesome from 'react-fontawesome'

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div id="clock">
        <FontAwesome name='clock-o' /> {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}

export default Clock;