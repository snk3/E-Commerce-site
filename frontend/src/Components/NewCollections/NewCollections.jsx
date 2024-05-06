import React from 'react'
import "./NewCollections.css"
import new_collections from "../Assets/new_collections.js"
import Item from "../Item/Item.jsx"

function NewCollections() {
  return (
    <div className="new-collections">
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className="collections">
            {
                new_collections.map((item,index)=>{
                    return <Item key={index} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
                })
            }
        </div>
    </div>
  )
}

export default NewCollections