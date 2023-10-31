import { Component } from 'react'

export default class Bai3 extends Component {
    constructor(){
    super();
    this.state = {
      time: new Date().toLocaleTimeString()
  }
  }
  componentDidMount() {
    this.timer = setInterval(() => this.updateClock(),1000)
  }
  updateClock = () => {
    this.setState({time: new Date().toLocaleTimeString()})
  };
  render() {
    return (
        <>
            <h2>Xin chào các bạn</h2>
            <p>Bây giờ là {this.state.time}</p>
        </>
    )
  }
}
