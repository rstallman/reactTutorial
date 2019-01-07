import React from 'react';
import ReactDOM from 'react-dom';
import CarsShopApp from './CarShop'


function BoilingVerdict(props) {
    if(props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
  
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}


const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};
  
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
                onChange={this.handleChange} />
      </fieldset>
    );
  }
}

  class Calculator extends React.Component {
    constructor(props) {
      super(props);
      this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
      this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
      this.state = {temperature: '', scale: 'c'};
    }
  
    handleCelsiusChange(temperature) {
      this.setState({scale: 'c', temperature});
    }
  
    handleFahrenheitChange(temperature) {
      this.setState({scale: 'f', temperature});
    }
  
    render() {
      const scale = this.state.scale;
      const temperature = this.state.temperature;
      const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
      const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
  
      return (
        <div>
          <TemperatureInput
            scale="c"
            temperature={celsius}
            onTemperatureChange={this.handleCelsiusChange} />
  
          <TemperatureInput
            scale="f"
            temperature={fahrenheit}
            onTemperatureChange={this.handleFahrenheitChange} />
  
          <BoilingVerdict
            celsius={parseFloat(celsius)} />
  
        </div>
      );
    }
  }


// ========================================
  
// ReactDOM.render(
//     <Calculator />,
//     document.getElementById('root')
// );

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO List</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
            placeholder="input here"
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

const TodoList = (props) => {
  return (
    <ol>
      {props.items.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ol>
  );
}


function ShoppingTitle(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>Total Number of Items: {props.numItems}</h2>
    </div>
  )
}

function LineItem(props) {
  return <li>{props.item}</li>
}

function ShoppingList(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <ol>
        <LineItem  item = {props.items[0]}/>
        <LineItem  item = {props.items[1]}/>
        <LineItem  item = {props.items[2]}/>
      </ol>
    </div>
  )
}


function MyShoppingApp(props) {
  return (
    <div>
      <ShoppingTitle title = "My New Shoppig list" numItems = {9} />
      <ShoppingList title = "Food" items = {['Apple', 'Bread', 'Cheese']}/>
      <ShoppingList title = "Clothes" items = {['Shirt', 'Pants', 'Hat']}/>
      <ShoppingList title = "Supplies" items = {['Pen', 'Paper', 'Glue']}/>
    </div>
  )
}

ReactDOM.render(
  <CarsShopApp cars={[{title:'Cars', carData:[{year:2013, model:'A', price:3200}, {year:2011, model:'B', price:4400}] },
                      {title:'Trucks', carData:[{year:2014, model:'D', price:18000}, {year:2013, model:'E', price:5200}]},
                     {title: 'Convertibles', carData:[{year:2009, model:'F', price:2000}, {year:2010, model:'G', price:6000}]}]}/>,
  document.getElementById('root')
);