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

