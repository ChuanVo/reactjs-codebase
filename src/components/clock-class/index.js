import { Component } from "react";

class ClassClock extends Component {
  constructor(props) {
    console.log('Khoi tao')
    super(props)

    this.state = {date: new Date()}
  }

  // Mounting
  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount: =>>> end mouting <<<=')


    // this.intervalId = setInterval(() => {
    //   this.setState((prevState) => {
    //     return {
    //       date: new Date(),
    //       counter: this.state.counter + 1
    //     }
    //   })
    // }, 3000);

  }

  // Updating
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  // Unmount
  componentWillUnmount() {
    console.log('componentWillUnmount')

    // if (this.intervalId) {
    //   clearInterval(this.intervalId)
    // }
  }

  handleClickUpdateState = () => {
    this.setState({date: new Date()})
  }

  render() {
    console.log('Render')
    return (
      <div className='clock'>
        <button onClick={this.handleClickUpdateState}>Generate time</button>
        <h1>Hello, I am Clock</h1>
        <h2>Now is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

export default ClassClock