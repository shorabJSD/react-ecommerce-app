import React, { useContext } from 'react'
import '../DisplayProduct/DisplayProduct.css'
import star from '../assets/star_icon.png'
import star_dull from '../assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext';
export default function DisplayProduct(props) {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <>
    <div className='product'>
      <div className="container my-2">
        <div className="displayProduct">
            <div className="displayProduct_left">
                <div className="side_img">
                    <img src={product.image} />
                    <img src={product.image} />
                    <img src={product.image} />
                </div>
                <div className="main_img">
                    <img src={product.image}/>
                </div>
            </div>
            <div className="displayProduct_right">
                 <h2>{product.name}</h2>
                <div className="displayProduct_star">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star_dull} alt="" />
                </div>
                <div className="product_price">
                    <div className="product_old_price">${product.old_price}</div>
                    <div className="product_new_price">${product.new_price}</div>
                </div>
                <div className="product_description">
                    <p>A lightweight, usually knitted, pullover shirt, close-fitting and with a round reckline and short sleeves, worn as an undershirt or outer garment</p>
                </div>
                <div className="product_size">
                    <h3>Select Size</h3>
                    <div className="size">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                    <button className="add_cart" onClick={()=>{addToCart(product.id)}}>Add To Cart</button>
                </div>
            <div className="product_category">
                <p>Catogry: {product.category}</p>
                <p>Tag:Moder latest</p>
            </div>
            </div>
         </div>
      </div>
    </div>
    </>
  )
}
