
import React from 'react';

class Horloge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heure: new Date().toLocaleTimeString()
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        heure: new Date().toLocaleTimeString()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <h1>Horloge</h1>
        <p>Il est {this.state.heure}</p>
      </div>
    );
  }
}

export default Horloge;