import React, { useContext } from 'react'
import "./CSS/ShopCategory.css"
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from "../Components/Assets/dropdown_icon.png"
import Item from "../Components/Item/Item"

function ShopCategory(props) {
  const {all_product} = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="banner" />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="dropdown_icon" />
        </div>
      </div>
      <div className="shopcategory-products">
        {
          all_product.map((item,index)=>{
            if(props.category === item.category){
              return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }
            else{
              return null;
            }
          })
        }  
      </div>
      <button className="shopcategory-loadmore">
        Explore More
      </button>
    </div>
  )
}

export default ShopCategory