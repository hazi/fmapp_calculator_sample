import './App.css';
import * as React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0
    };

    this.onChange = this.onChange.bind(this);
  };

  onChange(event) {
    const result = this.calculation(event.target.value);
    this.setState({result});
  };

  calculation(formula) {
    try {
      const filterd = formula.match(/[0-9]|\.|\*|\+|-|\/ /g);
      if (filterd === null) return "";

      return Function('"use strict"; return (' + filterd.join('') + ')')();
    } catch (error) {
      console.log({error: error});
      return "?";
    }
  };

  render() {
    return (
      <div>
        <h1>簡易計算機</h1>
        <p>
          <input type="text" onChange={this.onChange} /> = <input type="text" value={this.state.result} readOnly />
        </p>
      </div>
    );
  }
}
