import React from 'react'
import Item from "../Items/Item";
import New_Collections from '../assets/new_collections'
export default function NewCollections() {
  return (
    <>
        <div className="popular container my-5">
        <h1 className="text-center">NEW COLLECTIONS</h1>
        <hr style={{width:"100px",borderRadius:"5px", textAlign:"center", justifyContent:"center", border:"3px solid black", position:"relative", left:"45%"}}/>
        <div className="popularItem d-flex justify-content-between row row-cols-1 row-cols-md-4 g-4">
          {New_Collections.map((item, i) => {
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
    </>
  )
}
