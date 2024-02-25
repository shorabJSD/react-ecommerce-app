import React from "react";
import data_product from "../assets/data";
import Item from "../Items/Item";
export default function Popular() {
  return (
    <div>
      <div className="popular container my-5">
        <h1 className="text-center">POPULAR IN WOMEN</h1>
        <hr style={{width:"100px",borderRadius:"5px", textAlign:"center", justifyContent:"center", border:"3px solid black", position:"relative", left:"45%"}}/>
        <div className="popularItem d-flex justify-content-between row row-cols-1 row-cols-md-4 g-4">
          {data_product.map((item, i) => {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                img={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
