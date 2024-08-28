import React, {useState, useEffect} from 'react'
import {products}  from '../products';
import { changeQuantity } from '../stores/cart';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

const CartItem = (props) => {
  

    const {productId, quantity} = props.data;
    const [detail, setDetail] = useState([])
    const dispatch = useDispatch()

    useEffect(()=>{
        const findDetail = products.filter((product)=>(product.id === productId))[0]
        setDetail(findDetail)
    }
    ,[productId, products])

    const handleMinusQuantity = () =>{
        if (quantity > 1) {
            dispatch(changeQuantity({
              productId: productId,
              quantity: quantity - 1,
            }));
        }else {
            dispatch(changeQuantity({
              productId: productId,
              quantity: 0,
            }));
         toast.error(`${detail.name} removed from cart :(`, {
            style: {
              animation: 'slideIn 0.5s ease-out',
            },
          });
        }
      };


    const handlePlusQuantity = ()=>{
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity + 1
        }))
    }

  return (
    <div className='flex justify-between items-center text-white bg-slate-600 p-2 border-b-2 border-slate-700 gap-5 rounded-md'>
        <img src={detail.image} className='w-12' />
        <h3>{detail.name}</h3>
        <p>₹{detail.price * quantity}</p>
        <div className='w-20 flex just gap-2'>
            <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600' onClick={handleMinusQuantity}>-</button>
            <span>{quantity}</span>
            <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600' onClick={handlePlusQuantity}>+</button>
        </div>
    </div>
  )
}

export default CartItem