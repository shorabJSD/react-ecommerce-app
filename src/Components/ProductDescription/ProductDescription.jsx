import React from "react";
import '../ProductDescription/ProductDescription.css'
export default function ProductDescription() {
  return (
    <div>
      <div className="productDescription">
        <div className="container my-4">
          <div className="description_title">
            <div>Description</div>
            <div>Reviews(122)</div>
          </div>
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              style={{height: "200px"}}
              disabled
            >
            Embrace the chilly weather in style with our cozy knit sweater. Made from ultra-soft, high-quality yarn, this sweater provides warmth and comfort without compromising on fashion. Its relaxed fit and classic crew neckline make it perfect for layering over your favorite tops. Whether you're lounging at home or running errands, this versatile piece will keep you feeling snug and stylish all day long.
           
            Embrace the chilly weather in style with our cozy knit sweater. Made from ultra-soft, high-quality yarn, this sweater provides warmth and comfort without compromising on fashion. Its relaxed fit and classic crew neckline make it perfect for layering over your favorite tops. Whether you're lounging at home or running errands, this versatile piece will keep you feeling snug and stylish all day long.
            </textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
