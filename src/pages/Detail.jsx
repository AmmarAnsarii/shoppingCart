import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import  {products } from '../products';
import { useDispatch, useSelector } from 'react-redux';
import  {addToCart}  from '../stores/cart';
import toast, {Toaster} from 'react-hot-toast';

const Detail = () => {

  const {slug} = useParams();
  const [detail, setDetail] = useState([])
  const[quantity, setQuantity] = useState(1)
  const carts = useSelector(xyz => xyz.cart.items)
  const dispatch = useDispatch()

  useEffect(()=>{
    const findDetail = products.filter((product)=>(product.slug===slug))
    if(findDetail.length> 0){
      setDetail(findDetail[0])
    }
    else{
      window.location.href = "/"
    }
  } 
  , [slug])


  const handleMinusQuantity = ()=>{
    setQuantity(quantity - 1< 1? 1 : quantity -1)
  }

  const handlePlusQuantity = ()=>{
    setQuantity(quantity + 1)
  }
  
  const handleAddToCart = () =>{
    
    dispatch(addToCart({
      productId: detail.id,
      quantity: quantity
    }))
    toast.success(
      <div className='flex items-center'>
        <span className='mr-2'>🎉</span>
        {detail.name} added to cart!
      </div>, 
      {
        style: {
          background: "teal",
          color: 'black',
          borderRadius: '8px',
          padding: '12px',
        },
      }
    );
  }

  

  return (
    <div>
      <h2 className='text-3xl text-center'>PRODUCT DETAILS</h2>
      <div className='grid grid-cols-2 gap-5 mt-5'>
        <div>
          <img src={detail.image} className='w-full'/>
        </div>
        <div className='flex flex-col gap-5'>
          <h1 className='text-4xl uppercase font-bold'>{detail.name}</h1>
          <p className='font-bold text-3xl'>
          ₹{detail.price}
          </p>
          <div className='flex gap-5'>
            <div className='flex gap-2 justify-center items-center'>
              <button className='bg-gray-200 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center' onClick={handleMinusQuantity}>-</button>
              <span className='bg-gray-200 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center'>{quantity}</span>
              <button className='bg-gray-200 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center'onClick={handlePlusQuantity}>+</button>
            </div>
            <button onClick={handleAddToCart}
            className='bg-slate-800 text-white px-7 py-3 rounded-xl shadow-2xl'>Add To Cart</button>
          </div>
          <p>{detail.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Detail