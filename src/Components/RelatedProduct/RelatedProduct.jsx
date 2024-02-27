import React from "react";
import related_product from "../assets/data.js";
import Item from "../Items/Item.jsx";
import '../RelatedProduct/RelatedProduct.css'
export default function RelatedProduct() {
  return (
    <div>
      <div className="relatedProduct">
        <div className="container">
          <h2 className="text-center my-4">Related Products </h2>
          <div className=" d-flex justify-content-between row row-cols-1 row-cols-md-4 g-4">
            {related_product.map((item, i) => {
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
    </div>
  );
}
