import React from 'react';

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