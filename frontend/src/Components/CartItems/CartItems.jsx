import React, { useContext } from 'react'
import "./CartItems.css"
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from "../Assets/cart_cross_icon.png"

function CartItems() {
    const { all_product, cartItems, addToCart, removeFromCart } = useContext(ShopContext);

    return (
        <div className="cartitems">
            <div className="cartitem-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>remove</p>
                <hr />
                {all_product.map((item, index) => {
                    if (cartItems[item.id] > 0) {
                        return (
                            <div>
                                <div className="cartitem-format">
                                    <img src={item.image} alt="item_image" />
                                    <p>count:{cartItems[item.id]}</p>
                                    <p>sdv</p>
                                    <button></button>
                                </div>
                            </div>
                        )
                    }

                })}

            </div>
        </div>
    )
}

export default CartItems