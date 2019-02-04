import React from 'react';

function CarOptions(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <div>
        New Only 
        <input type="checkbox" id="coding" name="interest" value="coding" checked/>
      </div>
      <div>
        Select Type
        <select>
          {props.options.map(opt => (<option value ={opt}>{opt}</option>))}
        </select>
      </div>
    </div>
  )
}

function CarShopTitle(props) {
  return(
    <div>
      <h1>{props.title}</h1>
      <p>The best place to buy vehicles online</p>   
    </div>
  )
}

function CarsList(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <ul>     
        {props.carData.map(data => (
          <table>
            <tr>
              <th>Year</th>
              <th>Model</th>
              <th>Price</th>
              <th>Buy</th>
            </tr>
            <tr>
              <td>{data.year}</td>
              <td>{data.model}</td>
              <td>${data.price}</td>
              <td><button>Buy Now</button></td>
            </tr>
          </table>
          ))}        
      </ul>
    </div>
  )
}

export default function CarsShopApp(props) {
  return(
    <div>
      <CarShopTitle title = "Welcome to Car React Shop" />
      <CarOptions title = "Choose Options" options = {['All'].concat(props.cars.map(carList => carList.title))}/>
      <div>
        {props.cars.map(carList => (
          <CarsList title = {carList.title}  carData = {carList.carData}/>
        ))}
      </div>
    </div>
  )
}

class Welcome extends React.Component {

  constructor(props) {
    super(props)
    this.state = {value:0}
  }

  componentDidMount() {
    this.setState((prevState, props) => {
      return {value: prevState.value + 1}
    })
    console.log(this.state.value)
  }

  render() {
    return <h1>{this.state.value}</h1>
  }
}





// ReactDOM.render(
//   <CarsShopApp cars={[{title:'Cars', carData:[{year:2013, model:'A', price:3200}, {year:2011, model:'B', price:4400}] },
//                       {title:'Trucks', carData:[{year:2014, model:'D', price:18000}, {year:2013, model:'E', price:5200}]},
//                      {title: 'Convertibles', carData:[{year:2009, model:'F', price:2000}, {year:2010, model:'G', price:6000}]}]}/>,
//   document.getElementById('root')
// );
