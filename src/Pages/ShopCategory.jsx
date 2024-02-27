import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/assets/dropdown_icon.png";
import Item from "../Components/Items/Item";

export default function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop_chategory">
      <img src={props.banner} alt="" />
      <div className="container my-5">
        <div className="shopCategory_toBar" style={{display:"flex", alignItems:"center", justifyContent:"space-between", }}>
          <h4>
            <span>Here 1-12</span> Out of 35 Products
          </h4>
          <p  style={{padding:"5px 20px", border:"1px solid black", borderRadius:"20px"}}>
            Sort by <img src={dropdown_icon} />
          </p>
        </div>
        <div className="shopCategory_products d-flex justify-content-between row row-cols-1 row-cols-md-4 g-4">
          {all_product.map((item, i)=>{
            if (props.category===item.category) {
              return <Item 
              key={i}
              id={item.id}
              name={item.name}
              img={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
              />
            }else{
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
}
