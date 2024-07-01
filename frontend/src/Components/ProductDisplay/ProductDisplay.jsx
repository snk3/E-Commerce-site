import React, { useContext } from 'react'
import "./ProductDisplay.css"
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext';


function ProductDisplay(props) {

    const product = props.product;
    const {addToCart} = useContext(ShopContext);
    
    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="product_image" />
                    <img src={product.image} alt="product_image" />
                    <img src={product.image} alt="product_image" />
                    <img src={product.image} alt="product_image" />
                </div>
                <div className="productdisplay-image">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt="star_icon" />
                    <img src={star_icon} alt="star_icon" />
                    <img src={star_icon} alt="star_icon" />
                    <img src={star_icon} alt="star_icon" />
                    <img src={star_dull_icon} alt="star_dull_icon" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">
                        ${product.old_price}
                    </div>
                    <div className="productdisplay-right-price-new">
                        ${product.new_price}
                    </div>
                </div>
                <div className="productdisplay-right-description">
                    Elevate your style with this jacket. Featuring a full-zip design and zippered pockets, sleek and practical.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>XXL</div>
                        <div>XL</div>
                        <div>L</div>
                        <div>M</div>
                        <div>S</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>Add To Cart</button>
                <p className='productdisplay-right-category'><span>Category :</span> Women, T-Shirt, Crop Top</p>
                <p className='productdisplay-right-tags'><span>Tags :</span> Modern, Latest</p>

            </div>
        </div>
    )
}

export default ProductDisplay