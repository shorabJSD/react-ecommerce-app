
import react, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router';
import Breadcurm from '../Components/Breadcrum/Breadcurm';
import DisplayProduct from '../Components/DisplayProduct/DisplayProduct';
import ProductDescription from '../Components/ProductDescription/ProductDescription';
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct';
 
 export default function Product() {
    const {all_product} = useContext(ShopContext);
    const {productID} = useParams();
    const product = all_product.find((e)=>e.id===Number(productID))
   return (
     <>
      <Breadcurm product={product}/>
      <DisplayProduct product={product}/>
      <ProductDescription/>
      <RelatedProduct/>
     </>
    
   )
 }
 