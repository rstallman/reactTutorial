import React from 'react';

class Multiplier extends React.Component {

  constructor(props) {
    super(props);
    this.state = {input1: 0, input2:0, product:0};
    this.multiply = this.multiply.bind(this);
  }

  multiply(id, val) {
    if(id == 1) {
      this.setState({input1:val, product:val*this.state.input2});
    } 
    else if(id == 2){
      this.setState({input2:val, product:this.state.input1 * val});
    }
  }

  render() {
    return (
      <div>
        <NumberInputField id="1" action={this.multiply.bind(this)} />
        <NumberInputField id="2" action={this.multiply.bind(this)} />
        <OutputField product={this.state.product} />
      </div>
    )
  }

}

class NumberInputField extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.action(this.props.id, e.target.value);
  }

  render() {
    return (
      <input onChange={this.handleChange}></input>
    )
  }
}

function OutputField(props) {
  return (
    <div>
      The product is {props.product}.
    </div>
  );
}

export {Multiplier};