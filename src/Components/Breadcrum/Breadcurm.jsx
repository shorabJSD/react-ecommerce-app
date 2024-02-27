import React from 'react'
import arrow_icon from '../assets/breadcrum_arrow.png'
export default function Breadcurm(props){
    const {product} = props;
  return (
    <div>
       HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}