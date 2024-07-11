import React, { useContext } from 'react'
import "./CartItems.css"
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from "../Assets/cart_cross_icon.png"

function CartItems() {
    const { all_product, cartItems, removeFromCart, totalCartAmount } = useContext(ShopContext);
    
    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>remove</p>
            </div>
                <hr />
                {all_product.map((item) => {
                    if (cartItems[item.id] > 0) {
                        console.log(cartItems)
                        return <div>
                                <div className="cartitems-format cartitems-format-main">
                                    <img src={item.image} className='cartitems-product-icon' alt="item_image" />
                                    <p>{item.name}</p>
                                    <p>${item.new_price}</p>
                                    <button className='cartitems-quantity'>{cartItems[item.id]}</button>
                                    <p>${item.new_price*cartItems[item.id]}</p>
                                    <img src={remove_icon} className="cartitems-remove-icon" alt="item_image" onClick={() => removeFromCart(item.id)}/>
                                </div>
                                <hr />
                            </div>
                    }
                    return null;
                })}
                <div className="cartitems-down">
                    <div className="cartitems-total">
                        <h2>Cart Total</h2>
                        <div>
                            <div className="cartitems-total-item">
                                <p>SubTotal</p>
                                <p>${totalCartAmount()}</p>
                            </div>
                            <hr />
                            <div className='cartitems-total-item'>
                                <p>Shipping Fee</p>
                                <p>Free</p>
                            </div>
                            <div className='cartitems-total-item'>
                                <h3>Total</h3>
                                <h3>${totalCartAmount()}</h3>
                            </div>
                        </div>
                        <button>Proceed to Checkout</button>
                    </div>
                    <div className='cartitems-promo-code'>
                        <h2>Apply Promo Code</h2>
                        <div className='cartitems-promo-code-box'>
                            <input type="text" placeholder='  Enter Promo Code' />
                            <button>Apply</button>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default CartItems