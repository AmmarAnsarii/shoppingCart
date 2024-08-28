import React from 'react'
import { products } from '../products' 
import ProductCart from "../components/ProductCart"


function Home() {
  

  return (
    <div>
        <h1 className='text-3xl my-5 '>List Products</h1>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5' >
            {products.map((product, key)=>
            <ProductCart data = {product} key = {key}/>)}
        </div>
    </div>
  )
}

export default Home
