import React from 'react';

interface state {
  value: string;
}

class Greeting extends React.Component<{}, state> {
  constructor(props: {}) {
    super(props);
    this.state = {
      value: ''
    };
  }    
  private outMessage =()=> {
    alert(this.state.value)
  }
  private changeMessage = (e: React.ChangeEvent<HTMLInputElement>) =>{ 
    this.setState({ value: e.target.value })    
  }
  render() {
    return <div>
      <input placeholder="enter greeting" value={this.state.value} onChange={this.changeMessage}/>
      <button type="submit" onClick={this.outMessage}>add Message</button>
      <p>アラートでメッセージ「{this.state.value}」を出力</p>
      </div>
  }
}

export default Greeting;
