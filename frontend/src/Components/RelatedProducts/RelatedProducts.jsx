import React from 'react'
import "./RelatedProducts.css"
import data_product from "../Assets/data"
import Item from "../Item/Item"

function RelatedProducts() {
    return (
        <div className="relatedproducts">
            <h1>Related Products</h1>
            <hr />
            <div className="relatedproducts-item">
                {data_product.map((item, index) => <Item key={index} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>)}
            </div>
        </div>
    )
}

export default RelatedProducts