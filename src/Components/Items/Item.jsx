import React from "react";

export default function Item(props) {
  return (
    <>
      <div className="contaienr">
        <div className="card h-100">
          <img src={props.img} className="card-img-top" alt="" />
          <div className="card-body">
            <p className="card-text">{props.name}</p>
            <div className="item_price d-flex">
              <div className="itemNewPrice mx-2">
                <p>${props.new_price}</p>
              </div>
              <div className="itemOldPrice">
                <p style={{textDecoration:"line-through"}}>${props.old_price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
