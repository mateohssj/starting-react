import React from 'react'

const products = [
    {tittle:'Zanahoria', isFruit: true, id:1},
    {tittle:'Cargador', isFruit: false, id:2},
    {tittle:'Celuco', isFruit: false, id:3}
];

function ShoppingList() {
  const itemList = products.map (product =>
  <li
    key={product.id}
    style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
    }}
   >
    {product.tittle}
  </li>
  )

  return(
    <ul>{itemList}</ul>
  )
}

export default ShoppingList