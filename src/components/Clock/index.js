import {Component} from 'react'
import './index.css'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
    console.log('constructor Called')
  }

  componentDidMount() {
    console.log('coponenedidmount called')

    this.timerID = setInterval(this.trick, 1000)
  }

  componentWillUnmount() {
    console.log('willUnmount')
    clearInterval(this.timerID)
  }

  trick = () => {
    this.setState({date: new Date()})
  }

  render() {
    const {date} = this.state
    console.log(date, 'render called')
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
