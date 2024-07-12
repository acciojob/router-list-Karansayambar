import React from 'react'
import { useParams } from 'react-router-dom'

const ItemList = () => {
    const {id} = useParams();
    const items = [
        {
            id : 1,
            head : "Item 1",
            desc : "Description for Item 1"
        },
        {
            id : 2,
            head : "Item 2",
            desc : "Description for Item 2"
        },
        {
            id : 3,
            head : "Item 3",
            desc : "Description for Item 3"
        }
    ];
    const item = items.find((item) => item.id === parseInt(id))
  return (
    <div>
        <h1>{item.head}</h1>
        <p>{item.desc}</p>
    </div>
  )
}

export default ItemList